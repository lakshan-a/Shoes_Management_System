package lk.ijse.gdse66.springboot.backend.services;

import lk.ijse.gdse66.springboot.backend.dto.SaleDTO;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/7/2024
 */

public interface SaleServices {

    List<SaleDTO> getAllSales();
    SaleDTO getSaleDetails(String id);
    SaleDTO saveSales(SaleDTO salesDTO);
    void updateSales(String id, SaleDTO salesDTO);
    void deleteSales(String id);

}
