package lk.ijse.finalcoursework.shoeshop.service;

import lk.ijse.finalcoursework.shoeshop.dto.CustomerDTO;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/18/2024
 */

public interface CustomerService {
    List<CustomerDTO> getAllCustomers();
    CustomerDTO getCustomerDetails(String id);
    CustomerDTO saveCustomer(CustomerDTO customerDTO);
    void updateCustomer(String id, CustomerDTO customerDTO);
    void deleteCustomer(String id);
    String genarateNextCustomerCode();
}
