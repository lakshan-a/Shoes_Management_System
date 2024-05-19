package lk.ijse.gdse66.springboot.backend.repository;

import lk.ijse.gdse66.springboot.backend.entity.Customer;
import lk.ijse.gdse66.springboot.backend.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/5/2024
 */

@Repository
public interface SupplierRepo extends JpaRepository<Supplier,String> {


    Supplier findTopByOrderByCodeDesc();

    List<Supplier> findByNameStartingWith(String name);
}

/*const employee = {


}*/


/*let formData = new FormData()
*   formData.adppend('pic',picInstance);
*   formData.adppend('employee',employeeInstance);
*
*
*   @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    EmployeeDTO saveEmployee(@RequestParam("pic")MultipartFile pic,@RequestParam("employee")String employeeDTO) throws JsonProcessingException {
        System.out.println(pic.getOriginalFilename());
        return employeeService.saveEmployee(new ObjectMapper().readValue(employeeDTO,EmployeeDTO.class));
    }
* */