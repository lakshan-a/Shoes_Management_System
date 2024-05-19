package lk.ijse.gdse66.springboot.backend.auth.Request;

import lk.ijse.gdse66.springboot.backend.util.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/13/2024
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SignInRequest {

    private String email;
    private String password;
    private Role role;
}

