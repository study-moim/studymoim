package com.ssafy.peace.repository;

import com.ssafy.peace.entity.CourseType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseTypeRepository extends JpaRepository<CourseType, Integer> {

    // Todo: Test
    /*
    특정 강좌의 카테고리 가져오기
     */
    List<CourseType> getAllByCourseId(Integer courseId);

    /*
    특정 카테고리의 강좌 가져오기
     */
    List<CourseType> getAllByCourseCategoryId(Integer courseCategoryId);
}
