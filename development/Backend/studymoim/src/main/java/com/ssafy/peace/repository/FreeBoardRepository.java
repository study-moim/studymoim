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
    List<FreeBoard> findAllByTitleContaining(String keyword);

    List<FreeBoard> findAllByContentContaining(String keyword);

    List<FreeBoard> findAllByTitleContainingAndContentContaining(String keyword, String keyword_);

}
