package lk.ijse.finalcoursework.shoeshop.service;

import lk.ijse.finalcoursework.shoeshop.dto.UserDTO;
import lk.ijse.finalcoursework.shoeshop.util.Role;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/18/2024
 */

public interface UserService {
    UserDetailsService userDetailService();
    List<UserDTO> getAllUser();
    UserDTO getUserDetails(String email, Role role);
    UserDTO saveUser(UserDTO userDTO);
    void updateUser(String email, UserDTO userDTO);
    void deleteUser(String email);
}
