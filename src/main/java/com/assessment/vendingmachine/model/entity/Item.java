package com.assessment.vendingmachine.model.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="ITEMS")
public class Item {

	  @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(name="ITEM_ID")
	    private long id;
	    @Column(name="ITEM_NAME")
	    private String ItemName;
	    @Column(name="COST")
	    private double cost;
	    @Column(name="INVENTORY")
	    private int inventory;
	    @Column(name="IMAGE_URL")
	    private String imageUrl;
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getItemName() {
			return ItemName;
		}
		public void setItemName(String itemName) {
			ItemName = itemName;
		}
		public double getCost() {
			return cost;
		}
		public void setCost(double cost) {
			this.cost = cost;
		}
		public int getInventory() {
			return inventory;
		}
		public void setInventory(int inventory) {
			this.inventory = inventory;
		}
		public String getImageUrl() {
			return imageUrl;
		}
		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}
	    
	    @Override
	    public String toString() {
	    	return this.ItemName;
	    }
	
}
