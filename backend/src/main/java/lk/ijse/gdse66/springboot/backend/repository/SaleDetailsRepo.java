package lk.ijse.gdse66.springboot.backend.repository;

import lk.ijse.gdse66.springboot.backend.entity.SalesDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/7/2024
 */
@Repository
public interface SaleDetailsRepo extends JpaRepository<SalesDetails,String> {

    Boolean existsBySalesOrderNo(String id);
    List<SalesDetails> findAllBySalesOrderNo(String id);
    void deleteAllBySalesOrderNo(String id);
    Boolean existsAllBySalesOrderNo(String id);
}
