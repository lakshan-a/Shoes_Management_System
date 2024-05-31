package lk.ijse.finalcoursework.shoeshop.service;

import lk.ijse.finalcoursework.shoeshop.dto.InventoryDTO;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/18/2024
 */

public interface InventoryService {
    List<InventoryDTO> getAllInventory();
    InventoryDTO getInventoryDetails(String id);
    InventoryDTO saveInventory(InventoryDTO inventoryDTO);
    void updateInventory(String id, InventoryDTO inventoryDTO);
    void deleteInventory(String id);
    String nextInventoryCode(String code);
    List<InventoryDTO> getMostSaleItem();
}
