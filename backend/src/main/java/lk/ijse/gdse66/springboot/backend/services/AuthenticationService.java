package lk.ijse.gdse66.springboot.backend.services;

import lk.ijse.gdse66.springboot.backend.auth.Request.SignInRequest;
import lk.ijse.gdse66.springboot.backend.auth.Request.SignUpRequest;
import lk.ijse.gdse66.springboot.backend.auth.Response.JWTAuthResponse;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/19/2024
 */
public interface AuthenticationService {

    JWTAuthResponse signIn(SignInRequest signInRequest);
    JWTAuthResponse signUp(SignUpRequest signUpRequest);
}
