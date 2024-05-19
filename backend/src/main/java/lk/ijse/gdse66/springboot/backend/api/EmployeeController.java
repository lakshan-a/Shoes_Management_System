package lk.ijse.gdse66.springboot.backend.api;

import lk.ijse.gdse66.springboot.backend.dto.EmployeeDTO;
import lk.ijse.gdse66.springboot.backend.services.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/6/2024
 */

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;
//    produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/getAllCustomers")
    List<EmployeeDTO> getAllEmployee(){
        return employeeService.getAllEmployees();
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    EmployeeDTO saveEmployee(@RequestPart("data") EmployeeDTO employeeDTO,@RequestPart("profilepic")String profilepic){
        String base64ProfilePic = Base64.getEncoder().encodeToString(profilepic.getBytes());
        employeeDTO.setEmployeeProfilePic(
                base64ProfilePic
        );
        return employeeService.saveEmployee(employeeDTO);
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    void updateEmployee(@RequestPart("data") EmployeeDTO employeeDTO,@RequestPart("profilepic")String profilepic){
        String base64ProfilePic = Base64.getEncoder().encodeToString(profilepic.getBytes());
        employeeDTO.setEmployeeProfilePic(
                base64ProfilePic
        );
        employeeService.updateEmployee(employeeDTO.getEmployeeCode(),employeeDTO);
    }

    @DeleteMapping(value = "/{id}",consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    void deleteEmployee(@PathVariable("id") String customerCode){
        employeeService.deleteEmployee(customerCode);
    }

    @PatchMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    EmployeeDTO getEmployee(@PathVariable("id") String id){
        return employeeService.getEmployeeDetails(id);
    }

}


// ({
//         "employeeCode": "EMP001",
//         "employeeName": "lakshan",
//         "employeeProfilePic": "",
//         "gender": "MALE",
//         "status": "Active",
//         "designation": "Software Engineer",
//         "accessRole": "ADMIN",
//         "dob": "1990-01-01",
//         "dateOfJoin": "2020-05-01",
//         "attachedBranch": "Branch Name",
//         "addressLine01": "123 Main Street",
//         "addressLine02": "Colombo",
//         "addressLine03": "Western Province",
//         "addressLine04": "Sri Lanka",
//         "addressLine05": "12345",
//         "contactNo": "+94123456789",
//         "email": "lakshan@example.com",
//         "emergencyContactPerson": "lakshan"
//         }
//         )