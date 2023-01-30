package com.ssafy.peace.repository;

import com.ssafy.peace.entity.QuestionBoard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Arrays;
import java.util.List;

public interface QuestionBoardRepository extends JpaRepository<QuestionBoard, Integer> {
    List<QuestionBoard> findAllByIsDeletedIsFalseAndUser_UserId(Integer userId);

    // 자유게시판 해결되는대로 복붙
}
