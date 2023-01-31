//package com.ssafy.peace.service.auth;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jws;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import lombok.extern.slf4j.Slf4j;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//
//import java.io.UnsupportedEncodingException;
//import java.util.Date;
//
//@Slf4j
//@Component
//public class JwtTokenService {
//
//    public static final Logger logger = LoggerFactory.getLogger(JwtTokenService.class);
//
//    @Value("${jwt.secret}")
//    private String secretKey;
//
//    @Value("${jwt.access-token-expiration-date}")
//    private String accessExpireDate;
//
//    @Value("${jwt.refresh-token-expiration-date}")
//    private String refreshExpireDate;
//
//    public <T> String createAccessToken(String key, T data) {
//        return create(key, data, "access-token", Long.parseLong(accessExpireDate));
//    }
//
//    public <T> String createRefreshToken(String key, T data) {
//        return create(key, data, "refresh-token", Long.parseLong(refreshExpireDate));
//    }
//
//    //Token 발급
//    /**
//     * key : Claim에 셋팅될 key 값
//     * data : Claim에 셋팅 될 data 값
//     * subject : payload에 sub의 value로 들어갈 subject값
//     * expire : 토큰 유효기간 설정을 위한 값
//     * jwt 토큰의 구성 : header+payload+signature
//     */
//    public <T> String create(String key, T data, String subject, long expire) {
//        String jwt = Jwts.builder()
//                // Header 설정 : 토큰의 타입, 해쉬 알고리즘 정보 세팅.
//                .setHeaderParam("typ", "JWT")
//                .setHeaderParam("regDate", System.currentTimeMillis()) // 생성 시간
//                // Payload 설정 : 유효기간(Expiration), 토큰 제목 (Subject), 데이터 (Claim) 등 정보 세팅.
//                .setExpiration(new Date(System.currentTimeMillis() + expire)) // 토큰 유효기간
//                .setSubject(subject) // 토큰 제목 설정 ex) access-token, refresh-token
//                .claim(key, data) // 저장할 데이터
//                // Signature 설정 : secret key를 활용한 암호화.
//                .signWith(SignatureAlgorithm.HS256, this.generateKey())
//                .compact(); // 직렬화 처리.
//        return jwt;
//    }
//
//    // Signature 설정에 들어갈 key 생성.
//    private byte[] generateKey() {
//        byte[] key = null;
//        try {
//            key = secretKey.getBytes("UTF-8");
//        }catch (UnsupportedEncodingException e) {
//            if (logger.isInfoEnabled()) {
//                e.printStackTrace();
//            } else {
//                logger.error("Making JWT Key Error ::: {}", e.getMessage());
//            }
//        }
//        return key;
//    }
//
//    //	전달 받은 토큰이 제대로 생성된것인지 확인 하고 문제가 있다면 UnauthorizedException을 발생.
//    public boolean checkToken(String jwt) {
//        try {
////			Json Web Signature? 서버에서 인증을 근거로 인증정보를 서버의 private key로 서명 한것을 토큰화 한것
////			setSigningKey : JWS 서명 검증을 위한  secret key 세팅
////			parseClaimsJws : 파싱하여 원본 jws 만들기
//            Jws<Claims> claims = Jwts.parser().setSigningKey(this.generateKey()).parseClaimsJws(jwt);
////			Claims 는 Map의 구현체 형태
//            logger.debug("claims: {}", claims);
//            return true;
//        } catch (Exception e) {
////			if (logger.isInfoEnabled()) {
////				e.printStackTrace();
////			} else
//            logger.error(e.getMessage());
////			}
////			throw new UnauthorizedException();
////			개발환경
//            return false;
//        }
//    }
//}
