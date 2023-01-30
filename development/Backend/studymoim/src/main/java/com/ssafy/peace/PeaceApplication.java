package com.ssafy.peace;

import com.ssafy.peace.config.SecurityConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication()
public class PeaceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PeaceApplication.class, args);
	}

}
