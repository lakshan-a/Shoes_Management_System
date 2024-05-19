package lk.ijse.gdse66.springboot.backend.repository;

import lk.ijse.gdse66.springboot.backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/6/2024
 */
@Repository
public interface EmployeeRepo extends JpaRepository<Employee,String> {
    Boolean existsByEmployeeCode(String id);
    Employee findByEmployeeCode(String id);
    void deleteByEmployeeCode(String id);
}
