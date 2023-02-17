package com.ssafy.peace.repository;

import com.ssafy.peace.entity.StudyHistory;
import com.ssafy.peace.entity.UserHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface StudyHistoryRepository extends JpaRepository<StudyHistory, Integer> {

    // Todo: Test
    /*
    특정 스터디의 히스토리 가져오기(0개 일수도 있으니 Optional)
     */
    List<StudyHistory> findAllByStudy_studyId(int studyId);

    /*
    특정 스터디, 특정 강좌의 가장 최근 히스토리 가져오기
     */
    Optional<StudyHistory> findFirstByStudy_studyIdAndLecture_lectureIdOrderByEndTimeDesc(int studyId, int lectureId);

    @Query("select s from StudyHistory s where s.endTime = s.startTime and s.study.studyId = :studyId and s.lecture.lectureId = :lectureId ")
    List<StudyHistory> findAllByStartTimeEqualEndTime(Integer studyId, Integer lectureId);

}
