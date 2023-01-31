package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

    Course getByPlaylistId(String playlistId);

    Course findByTitle(String title);
}
