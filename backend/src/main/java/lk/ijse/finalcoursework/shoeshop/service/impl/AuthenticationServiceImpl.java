package lk.ijse.finalcoursework.shoeshop.service.impl;

import lk.ijse.finalcoursework.shoeshop.auth.request.SignInRequest;
import lk.ijse.finalcoursework.shoeshop.auth.request.SignUpRequest;
import lk.ijse.finalcoursework.shoeshop.auth.response.JWTAuthResponse;
import lk.ijse.finalcoursework.shoeshop.dto.UserDTO;
import lk.ijse.finalcoursework.shoeshop.persistence.entity.User;
import lk.ijse.finalcoursework.shoeshop.persistence.repository.EmployeeRepository;
import lk.ijse.finalcoursework.shoeshop.persistence.repository.SecurityRepository;
import lk.ijse.finalcoursework.shoeshop.service.AuthenticationService;
import lk.ijse.finalcoursework.shoeshop.service.JWTService;
import lk.ijse.finalcoursework.shoeshop.service.execption.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/20/2024
 */

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final PasswordEncoder passwordEncoder;
    private final SecurityRepository securityRepository;
    private final ModelMapper mapper;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;
    EmployeeRepository employeeRepository;

    @Override
    public JWTAuthResponse signIn(SignInRequest signInRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getEmail(), signInRequest.getPassword()));
        User user = securityRepository.findByEmail(signInRequest.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("user not found"));
        String generatedToken = jwtService.generateToken(user);
        return JWTAuthResponse.builder().token(generatedToken).build();
    }

    @Override
    public JWTAuthResponse signUp(SignUpRequest signUpRequest) {
        UserDTO userDTO = UserDTO.builder()
                .email(signUpRequest.getEmail())
                .password(passwordEncoder.encode(signUpRequest.getPassword()))
                .role(signUpRequest.getRole())
                .build();
        User savedUser = securityRepository.save(mapper.map(userDTO, User.class));
        String generatedToken = jwtService.generateToken(savedUser);
        return JWTAuthResponse.builder().token(generatedToken).build();
    }

    @Override
    public JWTAuthResponse updateaccount(SignUpRequest signUpRequest) {
        if(!employeeRepository.existsByEmployeeCode(signUpRequest.getEmail())){
            throw new NotFoundException("User"+ signUpRequest.getEmail() + "Not Found...");
        }
        UserDTO userDTO = UserDTO.builder()
                .email(signUpRequest.getEmail())
                .password(passwordEncoder.encode(signUpRequest.getPassword()))
                .role(signUpRequest.getRole())
                .build();
        User savedUser = securityRepository.save(mapper.map(userDTO, User.class));
        String generatedToken = jwtService.generateToken(savedUser);
        return JWTAuthResponse.builder().token(generatedToken).build();
    }
}
