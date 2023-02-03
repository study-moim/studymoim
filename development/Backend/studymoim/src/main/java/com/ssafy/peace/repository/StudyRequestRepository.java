package com.ssafy.peace.repository;

import com.ssafy.peace.entity.StudyRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyRequestRepository extends JpaRepository<StudyRequest, Integer> {

    // Todo: Test
    /*
    특정 스터디에 온 신청서 중 특정 상태(status) 가져오기
     */
    List<StudyRequest> findAllByStudy_studyIdAndRequestStatusEquals(int studyId, int requestStatus);
}
