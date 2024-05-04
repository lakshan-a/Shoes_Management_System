package lk.ijse.gdse66.springboot.backend.repository;


import lk.ijse.gdse66.springboot.backend.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepo extends JpaRepository<Customer,String> {

    Customer findTopByOrderByCodeDesc();

    List<Customer> findByNameStartingWith(String name);
}
