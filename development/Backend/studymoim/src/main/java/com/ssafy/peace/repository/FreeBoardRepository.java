package com.ssafy.peace.repository;

import com.ssafy.peace.entity.FreeBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.RollbackException;
import java.util.List;
import java.util.Optional;

@Repository
public interface FreeBoardRepository extends JpaRepository<FreeBoard, Integer> {
    Page<FreeBoard> findAllByIsDeletedIsFalse(Pageable pageable);
    List<FreeBoard> findAllByIsDeletedIsFalseAndUser_UserId(Integer userId);
    FreeBoard save(FreeBoard freeBoard);
    /*
    제목/내용/제목+내용에 특정 키워드가 들어가있는 글 찾기
     */
    Page<FreeBoard> findAllByIsDeletedIsFalseAndTitleContaining(String keyword, Pageable pageable);

    Page<FreeBoard> findAllByIsDeletedIsFalseAndContentContaining(String keyword, Pageable pageable);

    List<FreeBoard> findAllByTitleContainingAndContentContaining(String keyword, String keyword_);

}
