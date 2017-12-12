package com.assessment.vendingmachine.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.assessment.vendingmachine.model.entity.Coin;



@Repository
public interface CoinRepository extends CrudRepository<Coin, Long>{

	List<Coin> findAll();
}
