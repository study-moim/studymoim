package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CourseRepository extends JpaRepository<Course, Integer> {

    // Todo: Test
    /*
    삭제되지 않은 모든 강좌 가져오기
     */
    List<Course> findAllByDeletedIsFalse();

    /*
    특정 강좌제공자의 강좌 가져오기(필요할까?)
     */
    Optional<Course> findAllByCourseProviderIdAndDeletedIsFalse(Integer courseProviderId);

    /*
    특정 키워드를 제목에 포함한 강좌 가져오기
     */
    Optional<Course> findAllByTitleContainingAndDeletedIsFalse(String keyword);
}
