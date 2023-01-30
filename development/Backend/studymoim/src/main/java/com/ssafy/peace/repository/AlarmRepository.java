package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Alarm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AlarmRepository extends JpaRepository<Alarm, Integer> {

    /*
    특정 사용자가 확인 안한 알람 가져오기
     */
    Optional<Alarm> findAllByUser_UserIdAndIsCheckedIsFalse(int userId);

}
