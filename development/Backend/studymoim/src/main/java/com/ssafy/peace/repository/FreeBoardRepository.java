package com.ssafy.peace.repository;

import com.ssafy.peace.entity.FreeBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.RollbackException;
import java.util.List;
import java.util.Optional;

@Repository
public interface FreeBoardRepository extends JpaRepository<FreeBoard, Integer> {
    List<FreeBoard> findAllByIsDeletedIsFalse();
    List<FreeBoard> findAllByIsDeletedIsFalseAndUser_UserId(Integer userId);
    FreeBoard save(FreeBoard freeBoard);
    /*
    제목/내용/제목+내용에 특정 키워드가 들어가있는 글 찾기
     */
    Optional<FreeBoard> findAllByTitleContaining(String keyword);

    Optional<FreeBoard> findAllByContentContaining(String keyword);

    Optional<FreeBoard> findAllByTitleContainingAndContentContaining(String keyword, String keyword_);

}
