package com.ssafy.peace.repository;

import com.ssafy.peace.entity.StudyMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyMemberRepository extends JpaRepository<StudyMember, Integer> {

//    Todo 테스트해보기
    /*
    특정 유저가 포함되어 있는 스터디 개수, 스터디 아이디 리스트(방장이든 아니든)
     */
    Long countByUser_userIdAndIsBannedIsFalse(int userId);
    List<StudyMember> findAllByUser_UserId(int userId);
    /*
    특정 유저가 방장인 스터디 개수(필요할까?)
     */
    Long countByUser_userIdAndMemberRoleIsTrue(int userId);

    /*
    특정 스터디에 참가중인 사용자 수
     */
    Long countByStudy_studyIdAndIsBannedIsFalse(int studyId);

}
