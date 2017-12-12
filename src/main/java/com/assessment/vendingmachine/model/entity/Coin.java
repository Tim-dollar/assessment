package com.assessment.vendingmachine.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Coin")
public class Coin {

	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(name="COIN_ID")
	    private long id;
	    @Column(name="DENOMINATION")
	    private double denomination;
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public double getDenomination() {
			return denomination;
		}
		public void setDenomination(double denomination) {
			this.denomination = denomination;
		}
	    
	    
	
}
