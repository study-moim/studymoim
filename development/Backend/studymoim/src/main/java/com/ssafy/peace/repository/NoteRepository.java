package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Course;
import com.ssafy.peace.entity.Lecture;
import com.ssafy.peace.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Integer> {

    // Todo: Test
    /*
    특정 사용자가 특정 강의에 작성한 메모 가져오기
     */
    List<Note> findAllByUser_userIdAndLecture_lectureId(Integer userId, Integer lectureId);
    /*
    특정 사용자가 작성한 메모 개수 세기
     */
    Long countAllByUser_userId(Integer userId);

    List<Note> findAllByUser_userId(Integer userId);

    @Query("select distinct l.course from Lecture l join Note n on n.lecture.lectureId = l.lectureId where n.user.userId = :userId")
    List<Course> findAllCourseListExistNote(int userId);

    @Query("select l from Lecture l join Note n on n.lecture.lectureId = l.lectureId where n.user.userId = :userId and l.course.courseId = :courseId")
    List<Lecture> findAllLectureListExistNote(int userId, int courseId);
}
