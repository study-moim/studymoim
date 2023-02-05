package com.ssafy.peace.api;

import com.ssafy.peace.dto.UserDto;
import com.ssafy.peace.dto.auth.UserRegisterPostReq;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.service.UserService;
import com.ssafy.peace.service.auth.KakaoAuthService;
import com.ssafy.peace.util.JwtTokenUtil;
import com.ssafy.peace.util.SecurityUtil;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@Slf4j
@RestController
@RequestMapping("/api/v1/oauth")
public class AuthController {
    private String REDIRECT_CONTEXT;
    private final UserService userService;
    private final KakaoAuthService kakaoAuthService;

    @Autowired
    public AuthController(@Value("${oauth.kakao.redirect-context}") String REDIRECT_CONTEXT, UserService userService, KakaoAuthService kakaoAuthService){
        this.REDIRECT_CONTEXT = REDIRECT_CONTEXT;
        this.userService = userService;
        this.kakaoAuthService = kakaoAuthService;
    }

    @Operation(summary = "user login", description = "사용자 OAuth 로그인\n" +
            "반환값: Http status FOUND, Authentication 헤더(JWT 포함됨)\n")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/login")
    public ResponseEntity<?> kakaoLogin(String code) throws URISyntaxException {
        // authorizedCode: 카카오 서버로부터 받은 인가 코드
        String email = kakaoAuthService.getUserInfo(REDIRECT_CONTEXT, code).getEmail();
        // DB 에 중복된 Kakao Id 가 있는지 확인
        UserDto.Info kakaoUser = userService.getUserByEmail(email);
        // 카카오 정보로 회원가입
        if (kakaoUser == null) {
            UserRegisterPostReq registerInfo = new UserRegisterPostReq();
            registerInfo.setEmail(email);
            userService.createUser(registerInfo);
        }
        String token = JwtTokenUtil.getToken(email);
        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtTokenUtil.HEADER_STRING, JwtTokenUtil.TOKEN_PREFIX+token);
        return ResponseEntity.status(HttpStatus.FOUND).location(URI.create("http://"+(REDIRECT_CONTEXT.equals("localhost")?"localhost:4000":REDIRECT_CONTEXT)+"/login/kakao?access-token="+token)).headers(headers).build();
    }


    @Operation(summary = "get user info with token", description = "사용자 정보 불러오기\n" +
            "Spring Security에서 막은 경로(api/v1/user, api/v1/user, api/v1/articles, api/v1/study)에서 정상적으로 값을 얻어오기 위해선\n" +
            "Authorization 헤더에 'Bearer {발급받은 JWT 토큰}'의 형식으로 접근해야 함\n" +
            "axios의 default값으로 Authorization 헤더를 설정해주면 됨")
    @ApiImplicitParam(name = "Authorization", value = "Access Token", required = true, allowEmptyValue = false, paramType = "header", dataTypeClass = String.class, example = "Bearer access_token")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/info")
    public ResponseEntity<?> getUserInfoWithToken() {
        try {
            UserDto.Info user = SecurityUtil.getCurrentUser().orElseThrow(NullPointerException::new);
            log.info("Principal 정보는 다음과 같습니다" + user.toString());
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
