package lk.ijse.gdse66.springboot.backend.repository;

import lk.ijse.gdse66.springboot.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;


import java.util.Optional;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/14/2024
 */

public interface SecurityRepository extends JpaRepository<User,String> {

    Optional<User> findByEmail(String email);
}
