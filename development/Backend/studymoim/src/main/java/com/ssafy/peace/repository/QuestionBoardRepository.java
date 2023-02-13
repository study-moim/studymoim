package com.ssafy.peace.repository;

import com.ssafy.peace.entity.QuestionBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public interface QuestionBoardRepository extends JpaRepository<QuestionBoard, Integer> {

    Page<QuestionBoard> findAllByIsDeletedIsFalse(Pageable pageable);

    Page<QuestionBoard> findAllByIsDeletedIsFalseAndTitleContaining(String word, Pageable pageable);

    Page<QuestionBoard> findAllByIsDeletedIsFalseAndContentContaining(String word, Pageable pageable);

    List<QuestionBoard> findAllByIsDeletedIsFalseAndLecture_LectureId(Integer lectureId);
    List<QuestionBoard> findAllByIsDeletedIsFalseAndUser_UserId(Integer userId);

    QuestionBoard save(QuestionBoard questionBoard);

    // 자유게시판 해결되는대로 복붙
}
