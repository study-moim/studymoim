package com.ssafy.peace.repository;

import com.ssafy.peace.dto.MessageDto;
import com.ssafy.peace.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MessageRepository extends JpaRepository<Message, Integer> {

    // Todo: Test
    /*
    특정 사용자에게 도착한 메세지, 확인하지 않은 메세지가 있는지 확인
     */
    Optional<Message> findAllByToUser_UserId(int toUserId);
    boolean existsByToUser_UserIdAndIsCheckedIsFalse(int toUserId);

    /*
    특정 사용자가 보낸 메세지
     */
    List<Message> findAllByToUser_UserIdAndFromUser_UserId(int toUserId, int fromUserId);

}
