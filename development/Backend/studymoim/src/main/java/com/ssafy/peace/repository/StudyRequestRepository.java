package com.ssafy.peace.repository;

import com.ssafy.peace.entity.StudyRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudyRequestRepository extends JpaRepository<StudyRequest, Integer> {

    // Todo: Test
    /*
    특정 스터디에 온 신청서 중 처리 안된 것(null) 가져오기
     */
    Optional<StudyRequest> findAllByStudy_studyIdAndStatusIsNull(int studyId);
}
