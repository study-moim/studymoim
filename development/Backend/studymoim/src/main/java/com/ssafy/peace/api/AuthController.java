package com.ssafy.peace.api;

import com.ssafy.peace.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthController {

    @Autowired
    UserService userService;

    @GetMapping("/oauth/login")
    public String kakaoLogin(String code) {
        // code: 카카오 서버로부터 받은 인가 코드
        userService.kakaoLogin(code);
        return "redirect:/";
    }
}
