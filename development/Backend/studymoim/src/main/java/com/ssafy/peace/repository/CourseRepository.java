package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

    Course getByPlaylistId(String playlistId);

    Course findByTitle(String title);

    Course findByCourseId(Integer courseId);

    List<Course> findAllByTitleContains(String searchTitle);

    @Query("SELECT c FROM Course c WHERE c.courseId IN (:courseIdList)")
    List<Course> findByCourseIdIn(@Param("courseIdList") List<Integer> courseIdList);

//    @Query()
//    List<Course> courseInfoListcourseCategoryId
}
