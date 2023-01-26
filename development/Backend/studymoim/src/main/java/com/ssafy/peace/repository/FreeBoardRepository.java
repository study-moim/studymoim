package com.ssafy.peace.repository;

import com.ssafy.peace.entity.FreeBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FreeBoardRepository extends JpaRepository<FreeBoard, Integer> {
    List<FreeBoard> findAllByIsDeletedIsFalse();
    FreeBoard save(FreeBoard freeBoard);

}
