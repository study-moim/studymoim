package com.ssafy.peace.repository;

import com.ssafy.peace.dto.UserDto;
import com.ssafy.peace.entity.Message;
import com.ssafy.peace.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MessageRepository extends JpaRepository<Message, Integer> {

    // Todo: Test
    /*
    특정 사용자에게 도착한 메세지, 확인하지 않은 메세지가 있는지 확인
     */
    Optional<Message> findAllByToUser_UserId(int toUserId);

    boolean existsByToUser_UserIdAndIsCheckedIsFalse(int toUserId);

    @Query("select distinct m.fromUser from Message m where m.toUser.userId = :toUserId")
    List<User> findDistinctFromUser(int toUserId);

    /*
    특정 사용자가 보낸 메세지
     */
    List<Message> findAllByToUser_UserIdAndFromUser_UserId(int toUserId, int fromUserId);

    /*
    특정 사용자가 보낸 메세지 중 안 읽은 게 있는지 확인
     */
    boolean existsByToUser_UserIdAndFromUser_UserIdAndIsCheckedIsFalse(int toUserId, int fromUserId);

    /*
    특정 사용자가 보낸 메세지 중 안 읽은 메세지 읽음 처리
     */
    @Modifying(clearAutomatically = true)
    @Query("update Message m set m.isChecked = true where m.isChecked = false and m.toUser.userId = :toUserId and m.fromUser.userId = :fromUserId")
    int checkMessage(@Param("toUserId") int toUserId, @Param("fromUserId") int fromUserId);
}
