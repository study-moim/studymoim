package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Alarm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AlarmRepository extends JpaRepository<Alarm, Integer> {

    /*
    특정 사용자가 확인 안한 알람 가져오기
     */
    List<Alarm> findAllByUser_UserIdAndIsCheckedIsFalse(int userId);

    long countAllByUser_UserIdAndIsCheckedIsFalse(int userId);

    @Modifying(clearAutomatically = true)
    @Query("update Alarm a set a.isChecked = true where a.user.userId = :userId")
    int checkAllByUser(@Param("userId") int userId);
}
