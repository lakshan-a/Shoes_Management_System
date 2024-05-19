package lk.ijse.gdse66.springboot.backend.services;

import lk.ijse.gdse66.springboot.backend.dto.InventoryDTO;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/7/2024
 */
public interface InventoryService {

    List<InventoryDTO> getAllInventory();
    InventoryDTO getInventoryDetails(String id);
    InventoryDTO saveInventory(InventoryDTO inventoryDTO);
    void updateInventory(String id, InventoryDTO inventoryDTO);
    void deleteInventory(String id);
}
