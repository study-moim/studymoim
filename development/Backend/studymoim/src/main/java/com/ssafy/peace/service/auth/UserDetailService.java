package com.ssafy.peace.service.auth;

import com.ssafy.peace.dto.auth.Principal;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


/**
 * 현재 액세스 토큰으로 부터 인증된 유저의 상세정보(활성화 여부, 만료, 롤 등) 관련 서비스 정의.
 */
@Component
public class UserDetailService implements UserDetailsService{
    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userService.getUserByEmail(email);
        if(user != null) {
            Principal principal = new Principal(user);
            return principal;
        }
        return null;
    }
}
