package com.ssafy.peace.repository;

import com.ssafy.peace.entity.FreeBoard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FreeBoardRepository extends JpaRepository<FreeBoard, Integer> {

    // Todo: Test, regex 되는지 확인
    /*
    제목/내용/제목+내용에 특정 키워드가 들어가있는 글 찾기
     */
    Optional<FreeBoard> findAllByTitleContaining(String keyword);
    Optional<FreeBoard> findAllByContentContaining(String keyword);

//    regex 써야하지 않을까..
//    Optional<FreeBoard> findAllByTitleContainingAndContentContaining(String keyword, String keyword_);

}
