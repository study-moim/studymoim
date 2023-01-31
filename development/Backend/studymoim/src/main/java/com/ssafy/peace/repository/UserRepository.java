package com.ssafy.peace.repository;

import com.ssafy.peace.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    /*
    유저 찾기
     */
//    User findByUserId(Integer userId);
    User findByEmail(String email);
    User findByNickname(String nickname);

    /*
    유저 삭제
     */
    void deleteByUserId(int userId);



}
