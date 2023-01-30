package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

    Course getByPlaylistId(String playlistId);

    List<Course> findAllByIsAndDeletedIsFalse();


}
