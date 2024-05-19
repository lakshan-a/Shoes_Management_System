package lk.ijse.gdse66.springboot.backend;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/19/2024
 */

@SpringBootApplication
public class BackendApplication {

//    public static void main(String[] args) {
//        SpringApplication.run(BackendApplication.class, args);
//    }

    public BackendApplication() throws IOException {
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public ModelMapper mapper(){
        return new ModelMapper();
    }

}
