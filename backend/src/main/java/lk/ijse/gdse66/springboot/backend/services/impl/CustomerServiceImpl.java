package lk.ijse.gdse66.springboot.backend.services.impl;

import lk.ijse.gdse66.springboot.backend.dto.CustomerDTO;
import lk.ijse.gdse66.springboot.backend.entity.Customer;
import lk.ijse.gdse66.springboot.backend.repository.CustomerRepo;
import lk.ijse.gdse66.springboot.backend.services.CustomerService;
import lk.ijse.gdse66.springboot.backend.services.exception.DuplicateRecordException;
import lk.ijse.gdse66.springboot.backend.services.exception.NotFoundException;
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

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private ModelMapper mapper;
    @Override
    public CustomerDTO saveCustomer(CustomerDTO customerDTO) {
        if (customerRepo.existsById(customerDTO.getCode())){
            throw new DuplicateRecordException("Customer Id is already exists !!");
        }
        return mapper.map(customerRepo.save(mapper.map(customerDTO, Customer.class)),CustomerDTO.class);
    }

    @Override
    public CustomerDTO updateCustomer(CustomerDTO customerDTO) {
        if (!customerRepo.existsById(customerDTO.getCode())){
            throw new NotFoundException("Can't find customer id !!");
        }
        return mapper.map(customerRepo.save(mapper.map(customerDTO, Customer.class)), CustomerDTO.class);
    }

    @Override
    public boolean deleteCustomer(String id) {
        if (!customerRepo.existsById(id)){
            throw new NotFoundException("Can't find customer id !!");
        }
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
