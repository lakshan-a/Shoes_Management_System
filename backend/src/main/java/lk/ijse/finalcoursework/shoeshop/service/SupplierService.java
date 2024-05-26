package lk.ijse.finalcoursework.shoeshop.service;

import lk.ijse.finalcoursework.shoeshop.dto.SupplierDTO;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/20/2024
 */

public interface SupplierService {
    List<SupplierDTO> getAllSuppliers();
    SupplierDTO getSupplierDetails(String id);
    SupplierDTO saveSupplier(SupplierDTO supplierDTO);
    void updateSupplier(String id, SupplierDTO supplierDTO);
    void deleteSupplier(String id);
    String genarateNextSupplierCode();
}
