package com.ssafy.peace.util;

import com.ssafy.peace.dto.UserDto;
import com.ssafy.peace.dto.auth.Principal;
import com.ssafy.peace.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

@Slf4j
public class SecurityUtil {

    private SecurityUtil() {
    }

    public static Optional<String> getCurrentUsername() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            log.debug("Security Context에 인증 정보가 없습니다.");
            return Optional.empty();
        }
        String email = null;
        if (authentication.getPrincipal() instanceof UserDetails) {
            Principal springSecurityUser = (Principal) authentication.getPrincipal();
            email = springSecurityUser.getUser().getEmail();
        } else if (authentication.getPrincipal() instanceof String) {
            email = (String) authentication.getPrincipal();
        }
        return Optional.ofNullable(email);
    }

    public static Optional<UserDto.Info> getCurrentUser() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            log.debug("Security Context에 인증 정보가 없습니다.");
            return Optional.empty();
        }
        UserDto.Info user = null;
        if (authentication.getDetails() instanceof UserDetails) {
            Principal springSecurityUser = (Principal) authentication.getDetails();
            user = springSecurityUser.getUser();
        }
        return Optional.ofNullable(user);
    }
}