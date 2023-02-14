package com.ssafy.peace.repository;

import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.dto.StudyMemberDto;
import com.ssafy.peace.entity.Study;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface StudyRepository  extends JpaRepository<Study, Integer> {

    /*
    특정 키워드를 포함하고 있는 title을 가진 스터디 찾기(0개 일수도 있으니 Optional)
     */
    List<Study> findAllByTitleContaining(String keyword);

    /*
    구인중인 공개 스터디 찾기
     */
    List<Study> findAllByIsCloseIsFalse();

    @Query("select s from Study s join Curriculum a on s.studyId = a.study.studyId join Course b on a.course.courseId = b.courseId join CourseType c on b.courseId = c.course.courseId join CourseCategory d on c.courseCategory.courseCategoryId = d.courseCategoryId Where d.courseCategoryId = :courseCategoryId and s.isClose= false and s.isFinished = false ")
    List<Study> findByCourseCategoryId(@Param("courseCategoryId") Integer courseCategoryId);

    @Query(value = "select user_id as userId, (count(distinct lecture_id) / (select count(*) from lecture where course_id = :courseId)) as num " +
            "from study_member " +
            "left join user using(user_id) " +
            "right join user_history using(user_id) " +
            "left join lecture using(lecture_id) " +
            "left join course using(course_id) " +
            "where study_id = :studyId and course_id = :courseId " +
            "group by user_id",
            nativeQuery = true)
    List<Map<String, Integer>> findAllUserProgress(@Param("studyId") Integer studyId, @Param("courseId") Integer courseId);

    @Query(value = "select (count(distinct lecture_id) / (select count(*) from lecture where course_id = :courseId)) as num " +
            "from study_member " +
            "left join study using(study_id) " +
            "right join study_history using(study_id) " +
            "left join lecture using(lecture_id) " +
            "left join course using(course_id) " +
            "where study_id = :studyId and course_id = :courseId ",
            nativeQuery = true)
    List<Map<String, Integer>> findAllStudyProgress(@Param("studyId") Integer studyId, @Param("courseId") Integer courseId);

    @Query("SELECT s FROM Study s JOIN Curriculum cu ON s.studyId=cu.study.studyId WHERE cu.course.courseId=:courseId AND s.isClose=false AND s.isFinished=false")
    Page<Study> findAllByCurriculumContains(Integer courseId, Pageable pageable);


}
