package com.ssafy.peace.service;

import com.ssafy.peace.api.request.UserRegisterPostReq;
import com.ssafy.peace.dto.*;
import com.ssafy.peace.dto.auth.KakaoUserInfo;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import com.ssafy.peace.service.auth.KakaoAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.RollbackException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserHistoryRepository userHistoryRepository;
    private final StudyRepository studyRepository;
    private final StudyMemberRepository studyMemberRepository;
    private final NoteRepository noteRepository;
    private final FreeBoardRepository freeBoardRepository;
    private final QuestionBoardRepository questionBoardRepository;
    private final FollowRepository followRepository;
    private final AlarmRepository alarmRepository;
    private final KakaoAuthService kakaoAuthService;
    PasswordEncoder passwordEncoder;

    public List<UserDto.Info> getUserList() throws RuntimeException {
        return null;
    }

    public String kakaoLogin(String authorizedCode) {
        // 카카오 OAuth2 를 통해 카카오 사용자 정보 조회
        KakaoUserInfo userInfo = kakaoAuthService.getUserInfo(authorizedCode);
        return userInfo.getEmail();
    }

    public User createUser(UserRegisterPostReq userRegisterInfo) {
        User user = User.builder().email(userRegisterInfo.getEmail()).build();
        return userRepository.save(user);
    }
    public User getUserByEmail(String email) {
        // 디비에 유저 정보 조회 (userEmail을 통한 조회).
        User user = userRepository.findByEmail(email);
        return user;
    }

//    public void deleRefreshToken(Integer userId){
//        userRepository.findById(userId)
//                .map(UserDto.Info::fromEntity).get()
//                .builder().refreshToken(null).build();
//    }
//
//    public String getRefreshToken(Integer userId){
//        return userRepository.findById(userId)
//                .map(UserDto.Info::fromEntity)
//                .get().getRefreshToken();
//    }

    public UserDto.Info getUserInfo(Integer userId) throws RuntimeException {
        return userRepository.findById(userId)
                .map(UserDto.Info::fromEntity)
                .get();
    }

    public List<StudyDto.Info> getStudyList(Integer userId) throws RuntimeException {
        return studyMemberRepository.findAllByUser_UserId(userId).stream()
                .map(sm -> StudyDto.Info.fromEntity(sm.getStudy()))
                .collect(Collectors.toList());
    }

    public Object getCourseHistory(Integer userId) throws RuntimeException {
        return null;
        // TODO
    }

    public List<LectureDto.Info> getLectureHistory(Integer userId) throws RuntimeException {
        return userHistoryRepository.findAllByUser_userId(userId).stream()
                .map(uh -> LectureDto.Info.fromEntity(uh.getLecture()))
                .collect(Collectors.toList());
    }

    public List<NoteDto> getMemoList(Integer userId) {
        return noteRepository.findAllByUser_userId(userId).stream()
                .map(NoteDto::fromEntity)
                .collect(Collectors.toList());
    }

    public Map<String, Object> getPostList(Integer userId) {
        List<FreeBoardDto.Info> fList = freeBoardRepository.findAllByIsDeletedIsFalseAndUser_UserId(userId).stream()
                .map(FreeBoardDto.Info::fromEntity)
                .collect(Collectors.toList());
        List<QuestionBoardDto.Info> qList = questionBoardRepository.findAllByIsDeletedIsFalseAndUser_UserId(userId).stream()
                .map(QuestionBoardDto.Info::fromEntity)
                .collect(Collectors.toList());
        Map<String, Object> result = new HashMap<>();
        result.put("free", fList);
        result.put("question", qList);
        return result;
    }

    public Object getLikeList() {
        return null;
        // TODO
    }

    public long countFollowers(Integer userId) {
        return followRepository.countAllByToUser_UserId(userId);
    }
    public long countFollowings(Integer userId) {
        return followRepository.countAllByFromUser_UserId(userId);
    }

    @Transactional
    public UserDto.Info followUser(Integer myUserId, Integer targetUserId) {
        if(followRepository.findByFromUser_UserIdAndToUser_UserId(myUserId, targetUserId).isPresent()){
            return null;
        }
        followRepository.save(Follow.builder()
                .fromUser(userRepository.findById(myUserId)
                        .orElseThrow(NullPointerException::new))
                .toUser(userRepository.findById(targetUserId)
                        .orElseThrow(NullPointerException::new)).build());
        return UserDto.Info.fromEntity(userRepository.findById(targetUserId).orElseThrow(NullPointerException::new));
    }

    public UserDto.Info unfollowUser(Integer myUserId, Integer targetUserId) {
        if(followRepository.findByFromUser_UserIdAndToUser_UserId(myUserId, targetUserId).isPresent()){
            return null;
        }
        followRepository.delete(Follow.builder()
                .fromUser(userRepository.findById(myUserId)
                        .orElseThrow(NullPointerException::new))
                .toUser(userRepository.findById(targetUserId)
                        .orElseThrow(NullPointerException::new)).build());
        return UserDto.Info.fromEntity(userRepository.findById(targetUserId).orElseThrow(NullPointerException::new));
    }

    public List<AlarmDto.Info> getAlarmList(Integer userId) {
        return alarmRepository.findAllByUser_UserIdAndIsCheckedIsFalse(userId).stream()
                .map(AlarmDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public AlarmDto.Info makeAlarm(AlarmDto.Write alarm) {
        User user = userRepository.findById(alarm.getUserId()).get();
        return AlarmDto.Info.fromEntity(alarmRepository.save(Alarm.builder()
                .content(alarm.getContent())
                .url(alarm.getUrl())
                .user(user)
                .build()));
    }

    @Transactional
    public boolean checkAlarmList(Integer userId) {
        try {
            List<AlarmDto.Info> uncheckedList = getAlarmList(userId);
            if(uncheckedList == null)
                return true;
            uncheckedList.forEach(item -> item.builder().isChecked(true).build());
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
