package com.ssafy.peace.repository;

import com.ssafy.peace.entity.StudyCommunity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudyCommunityRepository extends JpaRepository<StudyCommunity, Integer> {

    // Todo: Test
    /*
    특정 스터디에서 작성한 모든 글(0개 일수도 있으니 Optional), 최신순
     */
    Optional<StudyCommunity> findAllByStudyIdAndDeletedIsFalseOrderByPublishTimeDesc(Integer studyId);


}
