package com.ssafy.peace.repository;

import com.ssafy.peace.entity.UserHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface UserHistoryRepository extends JpaRepository<UserHistory, Integer> {

    // Todo: Test
    /*
    특정 사용자의 히스토리 가져오기(0개 일수도 있으니 Optional)
     */
    Optional<UserHistory> findAllByUser_userId(int userId);

}
