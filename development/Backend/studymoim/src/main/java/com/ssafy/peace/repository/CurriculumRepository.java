package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Curriculum;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CurriculumRepository extends JpaRepository<Curriculum, Integer> {

    // Todo: Test
    /*
    특정 스터디의 커리큘럼 가져오기(order 오름차순)
     */
    List<Curriculum> findAllByStudyIdOrderByOrderAsc(Integer studyId);

    /*
    특정 강좌를 커리큘럼으로 등록한 스터디 목록, 개수 가져오기
     */
    List<Curriculum> findAllByCourseId(Integer courseId);

    Long countAllByCourseId(Integer courseId);
}
