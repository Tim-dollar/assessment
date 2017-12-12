
import { Component } from '@angular/core';
import { Http, URLSearchParams ,  Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {OnInit} from "@angular/core";
import { VendingService } from './service/vending.service';
import { MatProgressBar , MatProgressSpinner } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  credit = 0;
  status = '';
  BoughtItemName : '';
  BoughtItem: boolean;
  OpenDoor : boolean;
  loadingItems : boolean;
  loadingCoins : boolean;
  location = ['A1' , 'A2' , 'A3', 'B1' , 'B2' , 'B3', 'C1' , 'C2' , 'C3', 'D1' , 'D2' , 'D3'];
  items;
  coins;
  
   constructor( private vs : VendingService){
      this.items = [];
    
   }


   loadCoins(){
     this.loadingCoins = true;
    this.coins = [];
    this.vs.getAll('/coins').subscribe(coins => {
    
      coins.map( coin => {
         return {
           id : coin.id,
           denomination : coin.denomination
         }
      }).forEach(coin => {
        // if(this.coins.indexOf(coin) === -1 ){
         
        // }  
        this.coins.push(coin);
      });
   } ,
   err => {
    console.log(err);
}
  );
console.log(this.coins);
this.loadingCoins = true; 
setInterval(() => {
  this.loadingCoins = false;
}, 3000); 
  }


   loadItems(){
    this.loadingItems = true; 
    setInterval(() => {
      this.loadingItems = false;
    }, 3000); 
 
    this.items = [];
    this.vs.getAll('/items').subscribe(items => {
     
      items.map( item => {
         return {
           id : item.id,
           cost : item.cost,
           inventory : item.inventory,
           imageUrl : item.imageUrl,
           itemName : item.itemName
         }
      }).forEach(item => {

        if(this.items.indexOf(item) === -1 ){
          this.items.push(item);
        }
       
      });
      
    
  

    }
      
  , 
      
      err => {
          console.log(err);
      }
    );
 
  
   
   }
     
 
   ngOnInit(){
      this.reset();
      this.loadItems();
      this.loadCoins();
   }
  ngOnDestroy(){
    
  }
    insertCoin(value){
        this.credit += value;
    }

    selectItem(item){
      
      var price = this.getPrice(item);
        if(!this.hasEnoughFunds(price)){
        alert("You do not have enough funds to perform this transaction, please insert coins");
        
        
        return;
        }else if(!this.dispense(item)){
         alert("Item failed to dispense, please select another item");
         this.reset();
       return;
        }else{
          this.reduceCredit(price);
          this.showBoughtProduct(item);
          
          // setTimeout(function(){
          //  alert("Thank you for your patronage");
          // },1500);
          this.showStatus("Thank you and Enjoy");
          //this.reset();
        }
      

       
        

      }
      dispenseChange(){
        if(this.credit > 0){
         // this.showStatus(this.credit);

          alert("Your change is " + this.credit);
         
        }else{
          alert("You do not have any change");
          
        }
        this.reset();
      }

    getPrice(item){
      var price = this.items[item].cost;
      return price;
    }


    hasEnoughFunds(value){
      if(this.credit > value){
        return true;
      }

        return false;
      
  //   this.showStatus(value);
    
    }

    showStatus(value){
      this.status = value;
      setInterval(() => {
        this.status= "";
      }, 1000);
    }
   

    dispense(item){

      var list = this.items;

      if(list[item].inventory < 1){
        this.showStatus("There are no more items, please select another item");
        return false;
      }
    
      list[item].inventory -= 1;



      return true;
     

      
    }

    removeBoughtItem(){
      this.BoughtItem = true;

      setInterval(() => {
        this.OpenDoor = false;
      }, 2000);
      
      setInterval(() => {
        this.BoughtItem =  false;
      }, 1000);
    
    }


    showBoughtProduct(item){
    
      this.BoughtItemName = this.items[item].itemName;
      this.OpenDoor = true;
      this.BoughtItem = true;
      setInterval(() => {
        this.BoughtItem = false;
        this.OpenDoor = false;
      }, 6000);
     
    }


    reduceCredit(value){
      this.credit -= value;
    }

    showPrice(value){
      this.showStatus(value);
    }

    reset(){
      this.credit = 0;
      this.status ="";
      this.BoughtItem = false;
      this.BoughtItemName = "";

    }

}


export interface Item {
  id : String,
cost : String,
inventory : String ,
imageUrl : String,
itemName : String
}