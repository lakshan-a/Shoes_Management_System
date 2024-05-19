package lk.ijse.gdse66.springboot.backend.services.impl;

import lk.ijse.gdse66.springboot.backend.dto.UserDTO;
import lk.ijse.gdse66.springboot.backend.entity.User;
import lk.ijse.gdse66.springboot.backend.repository.UserRepo;
import lk.ijse.gdse66.springboot.backend.services.UserService;
import lk.ijse.gdse66.springboot.backend.services.exception.DuplicateRecordException;
import lk.ijse.gdse66.springboot.backend.services.exception.NotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/12/2024
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {

    UserRepo userRepository;
    ModelMapper modelMapper;


    public UserServiceImpl(UserRepo userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public UserDetailsService userDetailService() {
        return username -> userRepository.findByEmail(username)
                .orElseThrow(() -> new
                        UsernameNotFoundException(
                        "user not found"));
    }

    @Override
    public List<UserDTO> getAllUser() {
        return userRepository.findAll().stream().map(
                user -> modelMapper.map(user, UserDTO.class)
        ).toList();
    }

    @Override
    public UserDTO getUserDetails(String email, String role) {
        if(!userRepository.existsByEmail(email)){
            throw new NotFoundException("User email :"+email+" Not Found!");
        }
        return modelMapper.map(userRepository.findByEmailAndRole(email,role), UserDTO.class);
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        if(userRepository.existsByEmail(userDTO.getEmail())){
            throw new DuplicateRecordException("This User "+userDTO.getEmail()+" already have an account.");
        }
        return modelMapper.map(userRepository.save(modelMapper.map(
                userDTO, User.class)), UserDTO.class
        );
    }

    @Override
    public void updateUser(String email, UserDTO userDTO) {

        User existingUser = userRepository.findByEmailAndRole(email, String.valueOf(userDTO.getRole()));

        if(existingUser.getPassword().isEmpty()){
            throw new NotFoundException("User email :"+ email + "Not Found...");
        }

        existingUser.setPassword(userDTO.getPassword());
        existingUser.setRole(userDTO.getRole());

        userRepository.save(existingUser);

    }

    @Override
    public void deleteUser(String email) {

        if(!userRepository.existsByEmail(email)){
            throw  new NotFoundException("User email :"+ email + "Not Found...");
        }
        userRepository.deleteByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
