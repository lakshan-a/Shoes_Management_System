package lk.ijse.gdse66.springboot.backend.api;

import lk.ijse.gdse66.springboot.backend.dto.CustomerDTO;
import lk.ijse.gdse66.springboot.backend.dto.SupplierDTO;
import lk.ijse.gdse66.springboot.backend.services.CustomerService;
import lk.ijse.gdse66.springboot.backend.services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/4/2024
 */

@RestController
@RequestMapping("/supplier")
@CrossOrigin(origins = "*")
public class SuplierController {

    @Autowired
    private SupplierService supplierService;

    public SuplierController() {
        System.out.println("customer working !");
    }

    @GetMapping("/getAllSuppliers")
    public List<SupplierDTO> getAllCustomers(){
        return supplierService.getAllSuppliers();
    }

    @PostMapping("/save")
    public SupplierDTO save(@RequestBody SupplierDTO supplierDTO){
        System.out.println(supplierDTO);
        return supplierService.saveSupplier(supplierDTO);
    }

    @PostMapping("/update")
    public SupplierDTO update(@RequestBody SupplierDTO supplierDTO){
        System.out.println(supplierDTO);
        return supplierService.updateSupplier(supplierDTO);
    }

    @GetMapping("/nextId")
    public String nextId(){
        return supplierService.generateNextId();
    }

    @GetMapping("/search")
    public List<SupplierDTO> search(@RequestParam("name") String name){
        return supplierService.searchSupplier(name);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") String id){
        supplierService.deleteSupplier(id);
    }



}



//{
//        "code": "S001",
//        "name": "Navishka",
//        "category": null,
//        "addressLine1": "matara",
//        "addressLine2": "devinuwara",
//        "addressLine3": "devinuwara",
//        "addressLine4": "devinuwara",
//        "addressLine5": "devinuwara",
//        "contact_1": "755738991",
//        "contact_2": "755734991",
//        "email": "navishka@gmail.com"
//        }