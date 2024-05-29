package lk.ijse.finalcoursework.shoeshop;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/16/2024
 */

@SpringBootApplication
public class ShoeshopApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoeshopApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

}
