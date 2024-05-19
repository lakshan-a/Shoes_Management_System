package lk.ijse.gdse66.springboot.backend.services;

import lk.ijse.gdse66.springboot.backend.dto.UserDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/19/2024
 */
public interface UserService extends UserDetailsService
{

    UserDetailsService userDetailService();
    List<UserDTO> getAllUser();
    UserDTO getUserDetails(String email,String role);
    UserDTO saveUser(UserDTO userDTO);
    void updateUser(String email, UserDTO userDTO);
    void deleteUser(String email);
}
