package lk.ijse.finalcoursework.shoeshop.persistence.repository;

import lk.ijse.finalcoursework.shoeshop.persistence.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/18/2024
 */

public interface SecurityRepository extends JpaRepository<User,String> {
    Optional<User> findByEmail(String email);
}
