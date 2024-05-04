package lk.ijse.gdse66.springboot.backend.services.util;

import lk.ijse.gdse66.springboot.backend.dto.CustomerDTO;
import lk.ijse.gdse66.springboot.backend.entity.Customer;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/4/2024
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
}
