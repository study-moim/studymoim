package com.ssafy.peace.repository;

import com.ssafy.peace.entity.QuestionBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public interface QuestionBoardRepository extends JpaRepository<QuestionBoard, Integer> {

    List<QuestionBoard> findAllByIsDeletedIsFalse();
    List<QuestionBoard> findAllByIsDeletedIsFalseAndUser_UserId(Integer userId);

    QuestionBoard save(QuestionBoard questionBoard);
    // 자유게시판 해결되는대로 복붙
}
