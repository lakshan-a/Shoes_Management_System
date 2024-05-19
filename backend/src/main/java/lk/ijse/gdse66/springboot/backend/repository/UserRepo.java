package lk.ijse.gdse66.springboot.backend.repository;

import lk.ijse.gdse66.springboot.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/12/2024
 */
public interface UserRepo extends JpaRepository<User,String> {

    Boolean existsByEmail(String email);
    User findByEmailAndRole(String email,String role);
    void deleteByEmail(String email);
    Optional<User> findByEmail(String email);

}
