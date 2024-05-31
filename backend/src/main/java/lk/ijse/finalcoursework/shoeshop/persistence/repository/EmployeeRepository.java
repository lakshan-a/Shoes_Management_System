package lk.ijse.finalcoursework.shoeshop.persistence.repository;

import lk.ijse.finalcoursework.shoeshop.persistence.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/18/2024
 */
public interface EmployeeRepository extends JpaRepository<Employee,String> {
    //List<Employee>findAllByAndOrderByDobDesc();
    Boolean existsByEmployeeCode(String id);
    Employee findByEmployeeCode(String id);
    void deleteByEmployeeCode(String id);
    @Query(value = "SELECT employee_code FROM Employees ORDER BY employee_code DESC LIMIT 1", nativeQuery = true)
    String findLatestEmployeeCode();
    @Query(value = "SELECT * FROM employees e " +
            "WHERE (MONTH(e.dob) > MONTH(CURDATE())) " +
            "OR (MONTH(e.dob) = MONTH(CURDATE()) AND DAY(e.dob) >= DAY(CURDATE())) " +
            "ORDER BY MONTH(e.dob), DAY(e.dob)",
            nativeQuery = true)
    List<Employee> findEmployeesWithBirthdaysTodayAndAfter();
}
