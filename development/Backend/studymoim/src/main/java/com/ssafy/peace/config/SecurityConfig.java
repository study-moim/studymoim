package com.ssafy.peace.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
        httpSecurity.csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                // 시큐리티는 기본적으로 세션을 사용하지만, 여기서는 세션을 사용하지 않기 때문에 세션 설정을 Stateless 로 설정.
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .oauth2Login()
                .defaultSuccessUrl("/login-success")
//                .successHandler(oAuth2AuthenticationSuccessHandler)
                .userInfoEndpoint()
//                .userService(userOAuth2Service);
        ;

    }
}