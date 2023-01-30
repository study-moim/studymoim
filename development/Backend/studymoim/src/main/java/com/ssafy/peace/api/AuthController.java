package com.ssafy.peace.api;

import com.ssafy.peace.dto.auth.KakaoUserInfo;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.UserRepository;
import com.ssafy.peace.service.JwtTokenService;
import com.ssafy.peace.service.KakaoAuthService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
@AllArgsConstructor
public class AuthController {
    public static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";
    private final UserRepository userRepository;
    private final KakaoAuthService kakaoAuthService;
    private final JwtTokenService jwtTokenService;

    @GetMapping("/oauth/login")
    public ResponseEntity<Map<String, Object>> kakaoLogin(String code) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            // code: 카카오 서버로부터 받은 인가 코드
            KakaoUserInfo userInfo = kakaoAuthService.getUserInfo(code);
            String email = userInfo.getEmail();

            // DB에 이미 가입한 사용자인지 확인
            User kakaoUser = userRepository.findByEmail(email);

            // 로그인한 email로 토큰 발급
            String accessToken = jwtTokenService.createAccessToken("email", email);
            String refreshToken = jwtTokenService.createRefreshToken("email", email);

            // 카카오 정보로 회원가입, 토큰 저장
            if (kakaoUser == null) {
                User user = User.builder().email(email).refreshToken(refreshToken).build();
                userRepository.save(user);
            } else {
                User user = kakaoUser.builder().refreshToken(refreshToken).build();
                userRepository.save(user);
            }

            resultMap.put("email", email);
            resultMap.put("access-token", accessToken);
            resultMap.put("refresh-token", refreshToken);
            resultMap.put("message", SUCCESS);
            status = HttpStatus.ACCEPTED;

        } catch (Exception e) {
            logger.error("로그인 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
}
