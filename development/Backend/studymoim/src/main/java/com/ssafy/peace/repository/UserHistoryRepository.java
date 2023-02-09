package com.ssafy.peace.repository;

import com.ssafy.peace.entity.UserHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface UserHistoryRepository extends JpaRepository<UserHistory, Integer> {

    // Todo: Test
    /*
    특정 사용자의 히스토리 가져오기(0개 일수도 있으니 Optional)
     */
    List<UserHistory> findAllByUser_userId(int userId);

    Optional<UserHistory> findFirstByUser_UserIdAndLecture_LectureIdOrderByEndTimeDesc(int userId, int lectureId);

    @Query("select u from UserHistory u where u.endTime = u.startTime and u.user.userId = :userId and u.lecture.lectureId = :lectureId ")
    List<UserHistory> findAllByStartTimeEqualEndTime(Integer userId, Integer lectureId);

//    Optional<UserHistory> findUser_UserIdAndLecture_LectureId
}
