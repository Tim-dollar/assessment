import { Injectable } from '@angular/core';
import { Http, URLSearchParams ,  Response} from '@angular/http';
import { LoaderService } from '../loader/loader.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VendingService {

 private baseUrl = 'http://localhost:8080';
 loadingItems : boolean;
 loadingCoins : boolean;

  constructor(private http: Http , private loader : LoaderService) {}
 

  getAll(url : String):Observable<any> {
   
    this.loader.show();
    this.loadingItems = true;
    return this.http.get( this.baseUrl + url)._catch(this.onCatch)
    .map(this.mapItem).finally(() => {
      this.loader.hide();
      this.loadingItems = false;
  });

    }
  
    private onCatch(error: any, caught: Observable<any>): Observable<any> {
      return Observable.throw(error);
  }

    mapItem(response : Response){
      return response.json();
    }

  
  add(Item) {
    return this.http.post(this.baseUrl + '/items', Item)
      .map(response => {});
  }
  delete(Item) {
    return this.http.delete(`/items/${Item.id}`)
      .map(response => {});
  }
}

