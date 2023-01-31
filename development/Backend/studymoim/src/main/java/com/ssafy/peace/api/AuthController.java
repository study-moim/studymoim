package com.ssafy.peace.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.peace.api.request.UserRegisterPostReq;
import com.ssafy.peace.api.response.UserLoginPostRes;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.service.UserService;
import com.ssafy.peace.util.JwtTokenUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.HashMap;
import java.util.Map;

@Controller
@AllArgsConstructor
public class AuthController {

    UserService userService;

    @GetMapping("/oauth/login")
    public String kakaoLogin(String code, RedirectAttributes redirect) {
        // authorizedCode: 카카오 서버로부터 받은 인가 코드
        String email = userService.kakaoLogin(code);
        // DB 에 중복된 Kakao Id 가 있는지 확인
        User kakaoUser = userService.getUserByEmail(email);
        // 카카오 정보로 회원가입
        if (kakaoUser == null) {
            UserRegisterPostReq registerInfo = new UserRegisterPostReq();
            registerInfo.setEmail(email);
            userService.createUser(registerInfo);
        }
        redirect.addAttribute("statusCode", "200");
        redirect.addAttribute("message", "Success");
        redirect.addAttribute("accessToken", JwtTokenUtil.getToken(email));

        return "redirect:http://localhost:4000/login/kakao";
//        return ResponseEntity.ok(UserLoginPostRes.of(200, "Success", JwtTokenUtil.getToken(email)));
    }
}
