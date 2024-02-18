package org.mrpaulwoods.web;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                                .anyRequest().authenticated())
                .oauth2Login(oauth2Login -> oauth2Login
                        .loginPage("/oauth2/authorization/oidc-client"))
                .oauth2Client(withDefaults());

        return http.build();
    }

}
