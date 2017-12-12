package com.assessment.vendingmachine.error;

public class DataNotFound extends RuntimeException{

	private String message; 
	private long remaining; 
	public DataNotFound(String message) 
	{ 
		this.message = message;
		
	} 
	
	@Override 
	public String getMessage(){ 
		return message;
	} 

	
}
