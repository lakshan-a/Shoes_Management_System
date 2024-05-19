package lk.ijse.gdse66.springboot.backend.repository;

import lk.ijse.gdse66.springboot.backend.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/7/2024
 */
@Repository
public interface InventoryRepo extends JpaRepository<Inventory,String> {
    Boolean existsByItemCode(String id);
    Inventory findByItemCode(String id);
    void deleteByItemCode(String id);
}
