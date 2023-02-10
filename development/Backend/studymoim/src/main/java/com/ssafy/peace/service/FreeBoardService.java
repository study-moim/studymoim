package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardCommentDto;
import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.QuestionBoardCommentDto;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.AlarmRepository;
import com.ssafy.peace.repository.FreeBoardCommentRepository;
import com.ssafy.peace.repository.FreeBoardRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import javax.persistence.PersistenceException;
import javax.persistence.RollbackException;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FreeBoardService {

    private final FreeBoardRepository freeBoardRepository;
    private final FreeBoardCommentRepository freeBoardCommentRepository;
    private final UserRepository userRepository;
    private final AlarmRepository alarmRepository;

    @Transactional
    public List<FreeBoardDto.Detail> getFreeBoardList(Pageable page) throws RollbackException {
        return freeBoardRepository.findAllByIsDeletedIsFalse(page).stream()
                .map(freeBoard -> {
                    FreeBoardDto.Detail res = FreeBoardDto.Detail.fromEntity(freeBoard);
                    res.setFreeBoardComments(
                        FreeBoardDto.Detail.fromEntity(freeBoard).getFreeBoardComments().stream()
                                .filter(comment -> !comment.isDeleted())
                                .collect(Collectors.toList()));
                    return res;
                })
                .sorted(Comparator.comparing(FreeBoardDto.Detail::getPublishTime).reversed())
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
        freeBoardRepository.save(freeBoardRepository.findById(freeBoardId).get().delete());
    }

    @Transactional
    public FreeBoardDto.Detail getfreeBoardDetail(Integer articleId) throws RollbackException {
        freeBoardRepository.save(freeBoardRepository.findById(articleId).get().hit());
        FreeBoard freeBoard = freeBoardRepository.findById(articleId).get();
        FreeBoardDto.Detail res = FreeBoardDto.Detail.fromEntity(freeBoard);
        res.setFreeBoardComments(
                FreeBoardDto.Detail.fromEntity(freeBoard).getFreeBoardComments().stream()
                        .filter(comment -> !comment.isDeleted())
                        .collect(Collectors.toList()));
        return res;
    }

    @Transactional
    public FreeBoardCommentDto.Info writeComment(FreeBoardCommentDto.Write comment) {
        FreeBoardCommentDto.Info result =  FreeBoardCommentDto.Info.fromEntity(freeBoardCommentRepository
                .save(FreeBoardComment.builder()
                        .content(comment.getContent())
                        .freeBoard(freeBoardRepository.findById(comment.getFreeBoardId()).get())
                        .user(userRepository.findById(comment.getUserId()).get())
                .build()));
        alarmRepository.save(Alarm.builder()
                .content(freeBoardRepository.findById(comment.getFreeBoardId()).get().getTitle() +" 글에 댓글이 달렸습니다.")
                .user(userRepository.findById(freeBoardRepository.findById(comment.getFreeBoardId()).get().getUser().getUserId()).get())
                .url("/community/free/" + comment.getFreeBoardId())
                .build());
        return result;
    }

    @Transactional
    public FreeBoardCommentDto.Info deleteComment(Integer commentId) {
        FreeBoardComment freeBoardComment = freeBoardCommentRepository.findById(commentId).get();
        return FreeBoardCommentDto.Info.fromEntity(freeBoardCommentRepository.save(FreeBoardComment.builder()
                .freeBoard(freeBoardComment.getFreeBoard())
                .content(freeBoardComment.getContent())
                .user(freeBoardComment.getUser())
                .isDeleted(true)
                .build().updateId(commentId)));
    }

    public List<FreeBoardDto.Detail> searchFreeBoardByTitle(String key) {
        return freeBoardRepository.findAllByTitleContaining(key).stream()
                .map(freeBoard -> {
                    FreeBoardDto.Detail res = FreeBoardDto.Detail.fromEntity(freeBoard);
                    res.setFreeBoardComments(
                            FreeBoardDto.Detail.fromEntity(freeBoard).getFreeBoardComments().stream()
                                    .filter(comment -> !comment.isDeleted())
                                    .collect(Collectors.toList()));
                    return res;
                })
                .collect(Collectors.toList());
    }

    public List<FreeBoardDto.Detail> searchFreeBoardByContent(String key) {
        return freeBoardRepository.findAllByContentContaining(key).stream()
                .map(freeBoard -> {
                    FreeBoardDto.Detail res = FreeBoardDto.Detail.fromEntity(freeBoard);
                    res.setFreeBoardComments(
                            FreeBoardDto.Detail.fromEntity(freeBoard).getFreeBoardComments().stream()
                                    .filter(comment -> !comment.isDeleted())
                                    .collect(Collectors.toList()));
                    return res;
                })
                .collect(Collectors.toList());
    }

}
