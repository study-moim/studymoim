package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Integer> {

    // Todo: Test
    /*
    특정 유저를 팔로우하는 사람과 그 수 가져오기(팔로워)
     */
    Optional<Follow> getAllByToUser_UserId(int toUserId);
    Long countAllByToUser_UserId(int toUserId);

    /*
    특정 유저가 팔로우하는 사람과 그 수 가져오기(팔로잉)
     */
    Optional<Follow> getAllByFromUser_UserId(int fromUserId);
    Long countAllByFromUser_UserId(int fromUserId);
}
