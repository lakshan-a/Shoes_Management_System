package lk.ijse.finalcoursework.shoeshop.persistence.repository;

import lk.ijse.finalcoursework.shoeshop.persistence.entity.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/21/2024
 */

public interface SalesRepository extends JpaRepository<Sales,String> {
    Boolean existsByOrderNo(String id);
    Sales findByOrderNo(String id);
    void deleteByOrderNo(String id);
    List<Sales> findAllByPurchaseDate(Date date);
    @Query("SELECT o.purchaseDate FROM Sales o")
    List<Date>findAllPurchaseDate();
    @Query(value = "SELECT order_no FROM Sales ORDER BY order_no DESC LIMIT 1", nativeQuery = true)
    String findLatestOrderCode();
    @Query(value = "SELECT * FROM sales s WHERE DATE(s.purchase_date) = :today", nativeQuery = true)
    List<Sales> findTodaySales(@Param("today") String today);
}
