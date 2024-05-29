package lk.ijse.finalcoursework.shoeshop.service;

import lk.ijse.finalcoursework.shoeshop.auth.request.SignInRequest;
import lk.ijse.finalcoursework.shoeshop.auth.request.SignUpRequest;
import lk.ijse.finalcoursework.shoeshop.auth.response.JWTAuthResponse;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/20/2024
 */

public interface AuthenticationService {
    JWTAuthResponse signIn(SignInRequest signInRequest);
    JWTAuthResponse signUp(SignUpRequest signUpRequest);
    JWTAuthResponse updateaccount(SignUpRequest signUpRequest);
}
