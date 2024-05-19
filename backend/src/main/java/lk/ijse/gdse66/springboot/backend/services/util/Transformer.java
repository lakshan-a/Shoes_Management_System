package lk.ijse.gdse66.springboot.backend.services.util;

import lk.ijse.gdse66.springboot.backend.dto.CustomerDTO;
import lk.ijse.gdse66.springboot.backend.dto.SupplierDTO;
import lk.ijse.gdse66.springboot.backend.entity.Customer;

import lk.ijse.gdse66.springboot.backend.entity.Supplier;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/19/2024
 */

@Component
public class Transformer {

    @Autowired
    ModelMapper mapper;

    //constructor injection
    public Transformer(ModelMapper mapper) {
        this.mapper = mapper;
    }

    public CustomerDTO fromCustomerEntity(Customer customer){
        CustomerDTO customerDTO = mapper.map(customer, CustomerDTO.class);
        return customerDTO;
    }

    public Customer toCustomerEntity(CustomerDTO customerDTO){
        Customer customer = mapper.map(customerDTO, Customer.class);
        return customer;
    }

    public SupplierDTO fromSupplierEntity(Supplier supplier){
        SupplierDTO supplierDTO = mapper.map(supplier, SupplierDTO.class);
        return supplierDTO;
    }

    public Supplier toSupplierEntity(SupplierDTO supplierDTO){
        Supplier supplier = mapper.map(supplierDTO, Supplier.class);
        return supplier;
    }




}
