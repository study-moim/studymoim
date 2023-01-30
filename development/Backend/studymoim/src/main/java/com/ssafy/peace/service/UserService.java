package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserService{

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
