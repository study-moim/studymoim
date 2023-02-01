package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface LectureRepository extends JpaRepository<Lecture, Integer> {

    // Todo: Test, youtube api 더 연구 필요
    /*
    특정 강좌에 포함된 강의 찾기, 개수 세기
     */
    List<Lecture> findAllByCourse_CourseId(Integer courseId);
//
//    Long countByCourseIdAndDeletedIsFalse(Integer courseId);

    /*
    특정 키워드를 포함한 강의 찾기
     */
//    List<Lecture> findAllByTitleContainingAndDeletedIsFalse(String keyword);


}
