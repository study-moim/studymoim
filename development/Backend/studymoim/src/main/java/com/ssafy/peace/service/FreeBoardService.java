package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardCommentDto;
import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.QuestionBoardCommentDto;
import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.FreeBoardComment;
import com.ssafy.peace.entity.QuestionBoardComment;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.FreeBoardCommentRepository;
import com.ssafy.peace.repository.FreeBoardRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import javax.persistence.PersistenceException;
import javax.persistence.RollbackException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FreeBoardService {

    private final FreeBoardRepository freeBoardRepository;
    private final FreeBoardCommentRepository freeBoardCommentRepository;
    private final UserRepository userRepository;
    @Transactional
    public List<FreeBoardDto.Detail> getFreeBoardList() throws RollbackException {
        return freeBoardRepository.findAllByIsDeletedIsFalse().stream()
                .map(FreeBoardDto.Detail::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public FreeBoardDto.Info writeFreeBoard(FreeBoardDto.Write freeBoard) throws RollbackException  {
        return FreeBoardDto.Info.fromEntity(freeBoardRepository.save(FreeBoard.builder()
                .title(freeBoard.getTitle())
                .content(freeBoard.getContent())
                .user(userRepository.findById(freeBoard.getUserId()).get())
                .build()));
    }

    @Transactional
    public FreeBoardDto.Info updateFreeBoard(Integer freeBoardId, FreeBoardDto.Write freeBoard) throws RollbackException {
        return FreeBoardDto.Info.fromEntity(freeBoardRepository.save(FreeBoard.builder()
                .title(freeBoard.getTitle())
                .content(freeBoard.getContent())
                .user(userRepository.findById(freeBoard.getUserId()).get())
                .build().updateId(freeBoardId)));
    }

    @Transactional
    public void deleteFreeBoard(Integer freeBoardId) throws RollbackException  {
        freeBoardRepository.deleteById(freeBoardId);
    }

    public FreeBoardDto.Detail getfreeBoardDetail(Integer articleId) throws RollbackException {
        return FreeBoardDto.Detail.fromEntity(freeBoardRepository.findById(articleId).get());
    }

    @Transactional
    public FreeBoardCommentDto.Info writeComment(FreeBoardCommentDto.Write comment) {
        return FreeBoardCommentDto.Info.fromEntity(freeBoardCommentRepository
                .save(FreeBoardComment.builder()
                        .content(comment.getContent())
                        .freeBoard(freeBoardRepository.findById(comment.getFreeBoardId()).get())
                        .user(userRepository.findById(comment.getUserId()).get())
                .build()));
    }

    @Transactional
    public FreeBoardCommentDto.Info deleteComment(Integer commentId) {
        FreeBoardComment freeBoardComment = freeBoardCommentRepository.findById(commentId).get();
        return FreeBoardCommentDto.Info.fromEntity(freeBoardCommentRepository.save(FreeBoardComment.builder()
                .freeBoard(freeBoardComment.getFreeBoard())
                .content("(삭제된 메시지 입니다.)")
                .user(freeBoardComment.getUser())
                .isDeleted(true)
                .build().updateId(commentId)));
    }

    public List<FreeBoardDto.Detail> searchFreeBoardByTitle(String key) {
        return freeBoardRepository.findAllByTitleContaining(key).stream()
                .map(FreeBoardDto.Detail::fromEntity)
                .collect(Collectors.toList());
    }

    public List<FreeBoardDto.Detail> searchFreeBoardByContent(String key) {
        return freeBoardRepository.findAllByContentContaining(key).stream()
                .map(FreeBoardDto.Detail::fromEntity)
                .collect(Collectors.toList());
    }

}
