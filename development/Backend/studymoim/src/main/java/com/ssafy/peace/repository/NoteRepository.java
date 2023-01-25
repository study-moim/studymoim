package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Integer> {

    // Todo: Test
    /*
    특정 사용자가 특정 강의에 작성한 메모 가져오기(삭제된것 제외)
    optional? list???
     */
    Optional<Note> getAllByUserIdAndLectureIdAndDeletedIsFalse(Integer userId, Integer lectureId);

    /*
    특정 사용자가 작성한 메모 개수 세기
     */
    Long countAllByUserId(Integer userId);


}
