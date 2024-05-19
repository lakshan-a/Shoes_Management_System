package lk.ijse.gdse66.springboot.backend.services;

import org.springframework.security.core.userdetails.UserDetails;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/19/2024
 */
public interface JWTService {

    String extractUserName(String token);
    String generateToken(UserDetails userDetails);
    boolean isTokenValid(String token, UserDetails userDetails);
}
