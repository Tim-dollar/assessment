package com.assessment.vendingmachine.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.assessment.vendingmachine.model.entity.Coin;
import com.assessment.vendingmachine.model.entity.Item;
import com.assessment.vendingmachine.repository.CoinRepository;
import com.assessment.vendingmachine.repository.ItemRepository;

import java.util.ArrayList;
import java.util.List;



@RestController
@CrossOrigin
public class VendingMachineService {

	   @Autowired
	    private ItemRepository repository;
	   @Autowired
		private CoinRepository coinRepository;

		    @RequestMapping(value="/items", method= RequestMethod.GET)
		    List<Item> findAll(){
		       List<Item> products = new ArrayList<>();
		      
		            Iterable<Item> results = this.repository.findAll();
		       
		            results.forEach(product-> {
		            	products.add(product);
		             
		            });
		        
		        return products;
		    }
	
	    @RequestMapping(value="/coins", method= RequestMethod.GET)
	    List<Coin> findAllCoins(){
	       List<Coin> coins = new ArrayList<>();
	      
	            Iterable<Coin> results = this.coinRepository.findAll();
	       
	            results.forEach(coin-> {
	            	coins.add(coin);
	             
	            });
	        
	        return coins;
	    }
	    
	
}
