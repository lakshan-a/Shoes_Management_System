package lk.ijse.gdse66.springboot.backend.services;

import lk.ijse.gdse66.springboot.backend.dto.CustomerDTO;


import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/6/2024
 */

public interface CustomerService {

    CustomerDTO saveCustomer(CustomerDTO customerDTO);
    CustomerDTO updateCustomer(CustomerDTO customerDTO);
    boolean deleteCustomer(String id);
    List<CustomerDTO> getAllCustomers();
    List<CustomerDTO> searchCustomer(String name);

    String generateNextId();
}
