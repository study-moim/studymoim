package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.dto.UserDto;
import com.ssafy.peace.dto.auth.KakaoUserInfo;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.StudyRepository;
import com.ssafy.peace.repository.UserHistoryRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

import javax.persistence.RollbackException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserHistoryRepository userHistoryRepository;
    private final StudyRepository studyRepository;
    private final KakaoAuth2 kakaoAuth2;
    private final AuthenticationManager authenticationManager;

    public void kakaoLogin(String authorizedCode) {
        // 카카오 OAuth2 를 통해 카카오 사용자 정보 조회
        KakaoUserInfo userInfo = kakaoAuth2.getUserInfo(authorizedCode);
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

    public List<UserDto.Info> getUserList() throws RuntimeException {
        return null;
    }

    public void register(UserDto.Register userRegister) throws RuntimeException {

    }

    public UserDto.Info getUserInfo(Integer userId) throws RuntimeException {
        return userRepository.findById(userId)
                .map(UserDto.Info::fromEntity)
                .get();
    }



    public List<StudyDto.Info> getStudyList() {
        return null;
        // TODO
    }

    public Object getCourseHistory() {
        return null;
        // TODO
    }

    public Object getLectureHistory() {
        return null;
        // TODO
    }
}
