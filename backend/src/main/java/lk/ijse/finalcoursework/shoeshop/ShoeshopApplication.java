package lk.ijse.finalcoursework.shoeshop;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * @author: Manith Lakvidu,
 * @Runtime version: 11.0.11+9-b1341.60 amd64
 **/

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
