package com.ssafy.peace.repository;

import com.ssafy.peace.entity.UserLikeCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserLikeCategoryRepository extends JpaRepository<UserLikeCategory, Integer> {

    // Todo: Test

    /*
    특정 유저가 좋아하는 카테고리
     */
    List<UserLikeCategory> findAllByUserId(Integer userId);

    /*
    특정 카테고리를 좋아하는 유저 수?
     */
    Long countByCourseCategoryId(Integer courseId);
}
