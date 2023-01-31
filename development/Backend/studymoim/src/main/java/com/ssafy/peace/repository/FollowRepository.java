package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Integer> {

    // Todo: Test
    /*
    특정 유저를 팔로우하는 사람과 그 수 가져오기(팔로워)
     */
    Optional<List<Follow>> findAllByToUser_UserId(int toUserId);
    Long countAllByToUser_UserId(int toUserId);

    /*
    특정 유저가 팔로우하는 사람과 그 수 가져오기(팔로잉)
     */
    Optional<List<Follow>> findAllByFromUser_UserId(int fromUserId);
    Long countAllByFromUser_UserId(int fromUserId);

    Optional<Follow> findByFromUser_UserIdAndToUser_UserId(int fromUserId, int toUserId);
}
