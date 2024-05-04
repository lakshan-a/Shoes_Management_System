package lk.ijse.gdse66.springboot.backend.services.impl;

import lk.ijse.gdse66.springboot.backend.dto.CustomerDTO;
import lk.ijse.gdse66.springboot.backend.entity.Customer;
import lk.ijse.gdse66.springboot.backend.repository.CustomerRepo;
import lk.ijse.gdse66.springboot.backend.services.CustomerService;
import lk.ijse.gdse66.springboot.backend.services.exception.DuplicateRecordException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/4/2024
 */

@Service
public class CustomerServiceImpl implements CustomerService {

    @Override
    public CustomerDTO saveCustomer(CustomerDTO customerDTO) {
        return null;
    }

    @Override
    public CustomerDTO updateCustomer(CustomerDTO customerDTO) {
        return null;
    }

    @Override
    public boolean deleteCustomer(String id) {
        return false;
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return null;
    }

    @Override
    public List<CustomerDTO> searchCustomer(String name) {
        return null;
    }

    @Override
    public String generateNextId() {
        return null;
    }
}
