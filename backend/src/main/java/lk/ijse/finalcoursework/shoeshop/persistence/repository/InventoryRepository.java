package lk.ijse.finalcoursework.shoeshop.persistence.repository;

import lk.ijse.finalcoursework.shoeshop.persistence.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/18/2024
 */

public interface InventoryRepository extends JpaRepository<Inventory,String> {
    Boolean existsByItemCode(String id);
    Inventory findByItemCode(String id);
    void deleteByItemCode(String id);
    @Query(value = "SELECT COUNT(*) FROM Inventory", nativeQuery = true)
    Long countInventoryRows();
}
