package com.ssafy.peace.repository;

import com.ssafy.peace.entity.UserLikeCourse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserLikeCourseRepository extends JpaRepository<UserLikeCourse, Integer> {

    // Todo: Test
    /*
    특정 강좌를 좋아하는 유저 수 세기
     */
    Long countByCourse_courseId(int courseId);

    /*
    특정 유저가 좋아하는 강좌 찾기(0개 일수도 있으니 Optional)
     */
    Optional<List<UserLikeCourse>> findAllByUser_userId(int userId);

    Optional<UserLikeCourse> findByUser_userIdAndCourse_courseId(int userId, int courseId);


}
