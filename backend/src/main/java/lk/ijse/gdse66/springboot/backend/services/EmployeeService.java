package lk.ijse.gdse66.springboot.backend.services;

import lk.ijse.gdse66.springboot.backend.dto.EmployeeDTO;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/6/2024
 */
public interface EmployeeService {

    List<EmployeeDTO> getAllEmployees();
    EmployeeDTO getEmployeeDetails(String id);
    EmployeeDTO saveEmployee(EmployeeDTO employeeDTO);
    void updateEmployee(String id, EmployeeDTO employeeDTO);
    void deleteEmployee(String id);
}
