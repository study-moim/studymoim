package com.ssafy.peace.repository;

import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.dto.StudyMemberDto;
import com.ssafy.peace.entity.Study;
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

    @Query("select m.user.userId, count(distinct c.lectureId) as val from StudyMember m " +
            "left join User a on m.user.userId = a.userId " +
            "left join UserHistory b on a.userId = b.user.userId " +
            "left join Lecture c on b.lecture.lectureId = c.lectureId " +
            "left join Course d on c.course.courseId = d.courseId " +
            "where m.study.studyId =:studyId and d.courseId =:courseId " +
            "group by a.userId, d.courseId")
    List<Map<String, Integer>> findAllByProgress(@Param("studyId") Integer studyId, @Param("courseId") Integer courseId);
}
