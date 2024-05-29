package lk.ijse.finalcoursework.shoeshop.persistence.repository;

import lk.ijse.finalcoursework.shoeshop.persistence.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/17/2024
 */

public interface SupplierRepository extends JpaRepository<Supplier,String> {
    Boolean existsBySupplierCode(String id);
    Supplier findBySupplierCode(String id);
    void deleteBySupplierCode(String id);
    @Query(value = "SELECT supplier_code FROM Suppliers ORDER BY supplier_code DESC LIMIT 1", nativeQuery = true)
    String findLatestSupplierCode();
}
