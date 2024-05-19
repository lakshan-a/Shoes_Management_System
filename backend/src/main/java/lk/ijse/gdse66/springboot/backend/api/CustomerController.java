package lk.ijse.gdse66.springboot.backend.api;

import lk.ijse.gdse66.springboot.backend.dto.CustomerDTO;
import lk.ijse.gdse66.springboot.backend.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/4/2024
 */

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    public CustomerController() {
        System.out.println("customer working !");
    }

    @GetMapping("/getAllCustomers")
    public List<CustomerDTO> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @PostMapping("/save")
    public CustomerDTO save(@RequestBody CustomerDTO customerDTO){
        System.out.println(customerDTO);
//        customerDTO.setCode(customerService.generateNextId());
        return customerService.saveCustomer(customerDTO);
    }

    @PostMapping("/update")
    public CustomerDTO update(@RequestBody CustomerDTO customerDTO){
        System.out.println(customerDTO);
        return customerService.updateCustomer(customerDTO);
    }

    @GetMapping("/nextId")
    public String nextId(){
        return customerService.generateNextId();
    }

    @GetMapping("/search")
    public List<CustomerDTO> search(@RequestParam("name") String name){
        return customerService.searchCustomer(name);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") String id){
        customerService.deleteCustomer(id);
    }
}

