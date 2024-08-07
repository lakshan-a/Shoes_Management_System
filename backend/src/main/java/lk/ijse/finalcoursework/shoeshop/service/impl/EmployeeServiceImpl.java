package lk.ijse.finalcoursework.shoeshop.service.impl;

import lk.ijse.finalcoursework.shoeshop.dto.EmployeeDTO;
import lk.ijse.finalcoursework.shoeshop.persistence.entity.Employee;
import lk.ijse.finalcoursework.shoeshop.persistence.repository.EmployeeRepository;
import lk.ijse.finalcoursework.shoeshop.service.EmployeeService;
import lk.ijse.finalcoursework.shoeshop.service.execption.DublicateRecordException;
import lk.ijse.finalcoursework.shoeshop.service.execption.NotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/20/2024
 */

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
    EmployeeRepository employeeRepository;
    ModelMapper modelMapper;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository, ModelMapper modelMapper) {
        this.employeeRepository = employeeRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        return employeeRepository.findAll().stream().map(
                employee -> modelMapper.map(employee, EmployeeDTO.class)
        ).toList();
    }

    @Override
    public EmployeeDTO getEmployeeDetails(String id) {
        if(!employeeRepository.existsByEmployeeCode(id)){
            throw new NotFoundException("Employee "+id+" Not Found!");
        }
        return modelMapper.map(employeeRepository.findByEmployeeCode(id), EmployeeDTO.class);
    }

    @Override
    public EmployeeDTO saveEmployee(EmployeeDTO employeeDTO) {
        if(employeeRepository.existsByEmployeeCode(employeeDTO.getEmployeeCode())){
            throw new DublicateRecordException("This Employee "+employeeDTO.getEmployeeCode()+" already exicts...");
        }
        return modelMapper.map(employeeRepository.save(modelMapper.map(
                employeeDTO, Employee.class)), EmployeeDTO.class
        );
    }

    @Override
    public void updateEmployee(String id, EmployeeDTO employeeDTO) {
        if(!employeeRepository.existsByEmployeeCode(id)){
            throw new NotFoundException("Employee ID"+ id + "Not Found...");
        }
        employeeDTO.setEmployeeCode(id);
        employeeRepository.save(modelMapper.map(employeeDTO,Employee.class));
    }

    @Override
    public void deleteEmployee(String id) {
        if(!employeeRepository.existsByEmployeeCode(id)){
            throw  new NotFoundException("Employee ID"+ id + "Not Found...");
        }
        employeeRepository.deleteByEmployeeCode(id);
    }

    @Override
    public String nextEmployeeCode() {
        String lastEmployeeCode = employeeRepository.findLatestEmployeeCode();
        if(lastEmployeeCode==null){lastEmployeeCode = "EM000";}
        int numericPart = Integer.parseInt(lastEmployeeCode.substring(3));
        numericPart++;
        String nextEmployeeCode = "EM" + String.format("%03d", numericPart);
        return nextEmployeeCode;
    }

    @Override
    public List<EmployeeDTO> findAllEmployeesOrderByDob() {
        LocalDate today = LocalDate.now();
        Date sqlDate = Date.valueOf(today);
        System.out.println(sqlDate);
        List<EmployeeDTO>emp = employeeRepository.findEmployeesWithBirthdaysTodayAndAfter().stream().map(
                employee -> modelMapper.map(employee, EmployeeDTO.class)
        ).toList();
        for (EmployeeDTO employeeDTO :emp) {
            System.out.println(employeeDTO.getDob());
        }
        return employeeRepository.findEmployeesWithBirthdaysTodayAndAfter().stream().map(
                employee -> modelMapper.map(employee, EmployeeDTO.class)
        ).toList();
    }
}
