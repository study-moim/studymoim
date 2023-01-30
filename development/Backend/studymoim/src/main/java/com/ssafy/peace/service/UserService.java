package com.ssafy.peace.service;

import com.ssafy.peace.dto.*;
import com.ssafy.peace.dto.auth.KakaoUserInfo;
import com.ssafy.peace.entity.Note;
import com.ssafy.peace.entity.QuestionBoard;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.entity.UserHistory;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

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
    public List<UserDto.Info> getUserList() throws RuntimeException {
        return null;
    }

    public void register(UserDto.Register userRegister) throws RuntimeException {
        // TODO
    }

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
}
