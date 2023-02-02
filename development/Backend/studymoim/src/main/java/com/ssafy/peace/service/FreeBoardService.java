package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardCommentDto;
import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.QuestionBoardCommentDto;
import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.FreeBoardComment;
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
        User user = userRepository.findById(freeBoard.getUserId()).get();
        return FreeBoardDto.Info.fromEntity(freeBoardRepository.save(FreeBoard.builder()
                .title(freeBoard.getTitle())
                .content(freeBoard.getContent())
                .user(user)
                .build()));
    }

    public FreeBoardDto.Detail getfreeBoardDetail(Integer articleId) throws RollbackException {
        return FreeBoardDto.Detail.fromEntity(freeBoardRepository.findById(articleId).get());
    }

    public FreeBoardCommentDto.Info writeComment(Integer articleId, FreeBoardCommentDto.Write comment) {
        return FreeBoardCommentDto.Info.fromEntity(freeBoardCommentRepository
                .save(FreeBoardComment.builder()
                        .content(comment.getContent())
                        .parentComment(freeBoardCommentRepository.findById(comment.getParentCommentId()).get())
                        .freeBoard(freeBoardRepository.findById(articleId).get())
                        .user(userRepository.findById(comment.getUserId()).get())
                .build()));
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
