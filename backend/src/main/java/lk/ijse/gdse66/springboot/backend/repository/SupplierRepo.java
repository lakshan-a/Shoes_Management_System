package lk.ijse.gdse66.springboot.backend.repository;

import lk.ijse.gdse66.springboot.backend.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/19/2024
 */

@Repository
public interface SupplierRepo extends JpaRepository<Supplier,String> {


    Supplier findTopByOrderByCodeDesc();

    List<Supplier> findByNameStartingWith(String name);
}
