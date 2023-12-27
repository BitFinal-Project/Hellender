package com.example.spring_17.oauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class Spring17Application {

    public static void main(String[] args) {
        SpringApplication.run(Spring17Application.class, args);
    }

}
