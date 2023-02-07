package com.ssafy.peace.service;

import com.ssafy.peace.dto.auth.UserRegisterPostReq;
import com.ssafy.peace.dto.*;
import com.ssafy.peace.dto.auth.KakaoUserInfo;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import com.ssafy.peace.service.auth.KakaoAuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.RollbackException;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserHistoryRepository userHistoryRepository;
    private final UserLikeCategoryRepository userLikeCategoryRepository;
    private final CourseCategoryRepository courseCategoryRepository;
    private final StudyRepository studyRepository;
    private final StudyMemberRepository studyMemberRepository;
    private final NoteRepository noteRepository;
    private final FreeBoardRepository freeBoardRepository;
    private final QuestionBoardRepository questionBoardRepository;
    private final FollowRepository followRepository;
    private final AlarmRepository alarmRepository;
    private final MessageRepository messageRepository;
    private final CourseTypeRepository courseTypeRepository;
    private final CourseRepository courseRepository;

    public List<UserDto.Info> getUserList() throws RuntimeException {
        return null;
    }

    public UserDto.Info createUser(UserRegisterPostReq userRegisterInfo) {
        User user = User.builder().email(userRegisterInfo.getEmail()).build();
        return UserDto.Info.fromEntity(userRepository.save(user));
    }

    public UserDto.Info getUserByEmail(String email) {
        // 디비에 유저 정보 조회 (userEmail을 통한 조회).
        User user = userRepository.findByEmail(email);
        if(user == null) return null;
        return UserDto.Info.fromEntity(userRepository.findByEmail(email));
    }

    public UserDto.Info getUserInfo(Integer userId) throws RuntimeException {
        return UserDto.Info.fromEntity(userRepository.findById(userId).get());
    }

    public List<StudyDto.Info> getStudyList(Integer userId) throws RuntimeException {
        return studyMemberRepository.findAllByUser_UserId(userId).stream()
                .map(sm -> StudyDto.Info.fromEntity(sm.getStudy()))
                .collect(Collectors.toList());
    }

    public List<CourseDto.Info> getCourseHistory(Integer userId) {
        return userHistoryRepository.findAllByUser_userId(userId).stream()
                .map(uh -> CourseDto.Info.fromEntity(uh.getLecture().getCourse()))
                .distinct()
                .collect(Collectors.toList());
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
                .sorted(Comparator.comparing(FreeBoardDto.Info::getPublishTime).reversed())
                .collect(Collectors.toList());
        List<QuestionBoardDto.Info> qList = questionBoardRepository.findAllByIsDeletedIsFalseAndUser_UserId(userId).stream()
                .map(QuestionBoardDto.Info::fromEntity)
                .sorted(Comparator.comparing(QuestionBoardDto.Info::getPublishTime).reversed())
                .collect(Collectors.toList());
        Map<String, Object> result = new HashMap<>();
        result.put("free", fList);
        result.put("question", qList);
        return result;
    }

    public List<CourseCategoryDto.Info> getCourseCategoryList(Integer userId) {
        return userLikeCategoryRepository.findAllByUser_userId(userId).stream()
                .map(userLikeCategory -> CourseCategoryDto.Info.fromEntity(userLikeCategory.getCourseCategory()))
                .collect(Collectors.toList());
    }

    public void setCourseCategoryList(Integer userId, List<CourseCategoryDto.Info> categoryList) {
        userLikeCategoryRepository.deleteAllByUser_userId(userId);
        userLikeCategoryRepository.saveAll(categoryList.stream().map(category -> UserLikeCategory.builder()
                .courseCategory(courseCategoryRepository.findById(category.getCourseCategoryId()).get())
                .user(userRepository.findById(userId).get())
                .build()).collect(Collectors.toList()));
    }

    public Object getLikeList(Integer userId) {
        return null;
        // TODO
    }

    public long countFollowers(Integer userId) {
        return followRepository.countAllByToUser_UserId(userId);
    }

    public long countFollowings(Integer userId) {
        return followRepository.countAllByFromUser_UserId(userId);
    }

    public List<UserDto.Info> getFollowers(Integer userId) {
        return followRepository.findAllByToUser_UserId(userId).orElse(new ArrayList<>()).stream()
                .map(follow -> UserDto.Info.fromEntity(follow.getFromUser()))
                .collect(Collectors.toList());
    }

    public List<UserDto.Info> getFollowings(Integer userId) {
        return followRepository.findAllByFromUser_UserId(userId).orElse(new ArrayList<>()).stream()
                .map(follow -> UserDto.Info.fromEntity(follow.getToUser()))
                .collect(Collectors.toList());
    }

    @Transactional
    public boolean followingStatus(Integer myUserId, Integer targetUserId) {
        if (followRepository.findByFromUser_UserIdAndToUser_UserId(myUserId, targetUserId).isPresent()) {
            return true;
        }
        return false;
    }

    @Transactional
    public UserDto.Info followUser(Integer myUserId, Integer targetUserId) {
        if (followRepository.findByFromUser_UserIdAndToUser_UserId(myUserId, targetUserId).isPresent()) {
            return null;
        }
        followRepository.save(Follow.builder()
                .fromUser(userRepository.findById(myUserId)
                        .orElseThrow(NullPointerException::new))
                .toUser(userRepository.findById(targetUserId)
                        .orElseThrow(NullPointerException::new)).build());
        return UserDto.Info.fromEntity(userRepository.findById(targetUserId).orElseThrow(NullPointerException::new));
    }

    @Transactional
    public UserDto.Info unfollowUser(Integer myUserId, Integer targetUserId) {
        Optional<Follow> resopt = followRepository.findByFromUser_UserIdAndToUser_UserId(myUserId, targetUserId);
        if (!resopt.isPresent()) {
            return null;
        }
        followRepository.deleteById(resopt.get().getFollowId());
        return UserDto.Info.fromEntity(userRepository.findById(targetUserId).orElseThrow(NullPointerException::new));
    }

    public boolean existUncheckdAlarm(Integer userId) {
        return alarmRepository.existsByUser_UserIdAndIsCheckedIsFalse(userId);
    }

    @Transactional
    public List<AlarmDto.Info> getAlarmList(Integer userId) {
        List<AlarmDto.Info> res = alarmRepository.findAllByUser_UserIdAndIsCheckedIsFalse(userId).stream()
                .map(AlarmDto.Info::fromEntity)
                .collect(Collectors.toList());
        // 읽지 않은 알림 리스트의 사이즈가 0이 아니라면 모든 알림 읽음 처리
        if(res.size() != 0){
            alarmRepository.checkAllByUser(userId);
        }
        return res;
    }

    public boolean existUncheckdMessage(Integer toUserId) {
        return messageRepository.existsByToUser_UserIdAndIsCheckedIsFalse(toUserId);
    }

    public List<UserDto.Info> getMessageUserList(Integer toUserId) {
        return messageRepository.findDistinctFromUser(toUserId).stream()
                                    .map(UserDto.Info::fromEntity)
                                    .collect(Collectors.toList());
    }

    @Transactional
    public List<MessageDto.Info> getMessageHistory(Integer toUserId, Integer fromUserId) {
        List<MessageDto.Info> list = messageRepository.findAllByToUser_UserIdAndFromUser_UserId(toUserId, fromUserId).stream()
                                        .map(MessageDto.Info::fromEntity)
                                        .collect(Collectors.toList());
        list.addAll(messageRepository.findAllByToUser_UserIdAndFromUser_UserId(fromUserId, toUserId).stream()
                .map(MessageDto.Info::fromEntity)
                .collect(Collectors.toList()));
        list.sort(new Comparator<MessageDto.Info>() {
            @Override
            public int compare(MessageDto.Info o1, MessageDto.Info o2) {
                return o1.getSendTime().compareTo(o2.getSendTime());
            }
        });
        // 메세지 기록 중 안 읽은 메세지 읽음 처리
        if(messageRepository.existsByToUser_UserIdAndFromUser_UserIdAndIsCheckedIsFalse(toUserId, fromUserId)){
            messageRepository.checkMessage(toUserId, fromUserId);
        }

        return list;
    }

    @Transactional
    public List<CourseDto.Info> getRecommendCourses(Integer userId) throws Exception{
        // 사용자가 좋아한 카테고리 리스트에서 아이디만 추출
        List<Integer> categoryIdList = userLikeCategoryRepository.findAllByUser_userId(userId).stream()
                .map(UserLikeCategoryDto.recommend::fromEntity)
                .collect(Collectors.toList());
        // 그 아이디가 달린 강좌 아이디 추출
        List<Integer> courseIdList = courseTypeRepository.findByCourseTypeIdIn(categoryIdList).stream()
                .map(CourseTypeDto.recommend::fromEntity)
                .collect(Collectors.toList());
        // 그 아이디로 강좌 리스트 추출
        return courseRepository.findByCourseIdIn(courseIdList).stream()
                .map(CourseDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public UserDto.Info updateNickname(Integer userId, UserDto.Nickname nickname) throws RollbackException {
        return UserDto.Info.fromEntity(userRepository.findById(userId).get().updateNickname(nickname.getNickname()));
    }
}
