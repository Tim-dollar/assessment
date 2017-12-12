package com.assessment.vendingmachine.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.assessment.vendingmachine.model.entity.Item;

/**
 * Created by Daniel on 2017/12/06.
 */

@Repository
public interface ItemRepository extends CrudRepository<Item, Long>{

    List<Item> findAll();



}
