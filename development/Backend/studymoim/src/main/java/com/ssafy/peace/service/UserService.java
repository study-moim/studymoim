package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.auth.KakaoUserInfo;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final KakaoAuthService kakaoAuthService;
    private final AuthenticationManager authenticationManager;
    @Autowired
    public UserService(UserRepository userRepository, KakaoAuthService kakaoAuthService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.kakaoAuthService = kakaoAuthService;
        this.authenticationManager = authenticationManager;
    }

    public void kakaoLogin(String authorizedCode) {
        // 카카오 OAuth2 를 통해 카카오 사용자 정보 조회
        KakaoUserInfo userInfo = kakaoAuthService.getUserInfo(authorizedCode);
        String email = userInfo.getEmail();
        System.out.println("email!!!!!!!!!!!!!!!!!11: " + email);
        // DB에 이미 가입한 사용자인지 확인
        User kakaoUser = userRepository.findByEmail(email);

        // 카카오 정보로 회원가입
        if (kakaoUser == null) {
            User user = User.builder().email(email).build();
            userRepository.save(user);
        }

        // Todo: JWT 발급, JWT + SS 합치기, SS Filter 설정
        // Todo: 로그인 처리
//        Authentication kakaoEmail = new UsernamePasswordAuthenticationToken(kakaoUser) ;
//        Authentication authentication = authenticationManager.authenticate(kakaoEmail);
//        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    public Object getUserList() {
        return null;
    }

    public void register(FreeBoardDto.Write freeBoard) {

    }
}
