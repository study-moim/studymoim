package com.ssafy.peace.repository;

import com.ssafy.peace.entity.StudyRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyRequestRepository extends JpaRepository<StudyRequest, Integer> {

    // Todo: Test
    /*
    특정 스터디에 온 신청서 중 특정 상태(status) 가져오기
     */
    List<StudyRequest> findAllByStudy_studyIdAndRequestStatusEquals(Integer studyId, int requestStatus);

    /*
    특정 사용자가 해당 스터디에 이미 신청서를 넣었는지 확인
     */
    boolean existsByUser_UserIdAndStudy_StudyId(Integer userId, Integer studyId);
}
