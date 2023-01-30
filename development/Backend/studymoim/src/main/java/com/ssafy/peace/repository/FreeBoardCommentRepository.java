package com.ssafy.peace.repository;

import com.ssafy.peace.entity.FreeBoardComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FreeBoardCommentRepository extends JpaRepository<FreeBoardComment, Integer> {

    // Todo: Test
    /*
    특정 게시글의 댓글 및 대댓글 개수 가져오기(삭제된 댓글은 제외)
     */
//    Long countAllByFreeBoard_freeBoardId(int freeBoardId);
    /*
    특정 게시글에 쓰인 댓글 가져오기(시간 오름차순, 삭제된것도)
     */
//    Optional<FreeBoardComment> getAllByFreeBoard_freeBoardIdAndParentCommentIsNullOrderByPublishTimeAsc(int freeBoardId);

    /*
    특정 댓글의 대댓글 가져오기(시간 오름차순, 삭제된것도)
     */
//    Optional<FreeBoardComment> getAllByParentComment_parentCommentIdOrderByPublishTimeAsc(int parentCommentId);
}
