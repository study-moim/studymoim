package com.ssafy.peace.repository;

import com.ssafy.peace.entity.CourseType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CourseTypeRepository extends JpaRepository<CourseType, Integer> {

    // Todo: Test
    /*
    특정 강좌의 카테고리 가져오기
     */
    List<CourseType> findAllByCourse_CourseId(int courseId);
//
//    /*
//    특정 카테고리의 강좌 가져오기
//     */
    List<CourseType> findAllByCourseCategory_CourseCategoryId(int courseCategoryId);

    @Query("SELECT c FROM CourseType c WHERE c.courseCategory.courseCategoryId IN (:categoryIdList)")
    List<CourseType> findByCourseTypeIdIn(@Param("categoryIdList") List<Integer> categoryIdList);
}
