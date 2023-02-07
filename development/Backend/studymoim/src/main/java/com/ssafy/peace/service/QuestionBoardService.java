package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.QuestionBoardCommentDto;
import com.ssafy.peace.dto.QuestionBoardDto;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.RollbackException;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionBoardService {

    private final QuestionBoardRepository questionBoardRepository;
    private final QuestionBoardCommentRepository questionBoardCommentRepository;
    private final UserRepository userRepository;
    private final LectureRepository lectureRepository;
    @Transactional
    public List<QuestionBoardDto.Detail> getQuestionBoardList() throws RollbackException {
        return questionBoardRepository.findAllByIsDeletedIsFalse().stream()
                .map(questionBoard -> {
                    QuestionBoardDto.Detail res = QuestionBoardDto.Detail.fromEntity(questionBoard);
                    res.setQuestionBoardComments(
                            QuestionBoardDto.Detail.fromEntity(questionBoard).getQuestionBoardComments().stream()
                                    .filter(comment -> !comment.isDeleted())
                                    .collect(Collectors.toList()));
                    return res;
                })
                .sorted(Comparator.comparing(QuestionBoardDto.Detail::getPublishTime).reversed())
                .collect(Collectors.toList());
    }

    @Transactional
    public QuestionBoardDto.Detail getQuestionBoardDetail(Integer articleId) throws RollbackException {
        QuestionBoard questionBoard = questionBoardRepository.findById(articleId).get();
        QuestionBoardDto.Detail res = QuestionBoardDto.Detail.fromEntity(questionBoard);
        res.setQuestionBoardComments(
                QuestionBoardDto.Detail.fromEntity(questionBoard).getQuestionBoardComments().stream()
                        .filter(comment -> !comment.isDeleted())
                        .collect(Collectors.toList()));
        return res;
    }

    @Transactional
    public QuestionBoardDto.Info writeQuestion(QuestionBoardDto.Write questionBoardDto) throws RollbackException {
        return QuestionBoardDto.Info.fromEntity(questionBoardRepository.save(QuestionBoard.builder()
                .title(questionBoardDto.getTitle())
                .content(questionBoardDto.getContent())
                .lecture(lectureRepository.findById(questionBoardDto.getLectureId()).get())
                .user(userRepository.findById(questionBoardDto.getUserId()).get())
                .build()));
    }

    @Transactional
    public QuestionBoardDto.Info updateQuestion(Integer questionBoardId, QuestionBoardDto.Write questionBoardDto) throws RollbackException {
        return QuestionBoardDto.Info.fromEntity(questionBoardRepository.save(QuestionBoard.builder()
                .title(questionBoardDto.getTitle())
                .content(questionBoardDto.getContent())
                .lecture(lectureRepository.findById(questionBoardDto.getLectureId()).get())
                .user(userRepository.findById(questionBoardDto.getUserId()).get())
                .build()
                .updateId(questionBoardId)));
    }

    @Transactional
    public void deleteQuestion(Integer questionBoardId) throws RollbackException {
        questionBoardRepository.save(questionBoardRepository.findById(questionBoardId).get().delete());
    }

    @Transactional
    public QuestionBoardCommentDto.Info writeComment(QuestionBoardCommentDto.Write comment)
            throws RollbackException {
        return QuestionBoardCommentDto.Info.fromEntity(questionBoardCommentRepository.save(QuestionBoardComment.builder()
                .content(comment.getContent())
                .questionBoard(questionBoardRepository.findById(comment.getQuestionBoardId()).get())
                .user(userRepository.findById(comment.getUserId()).get())
                .build()));
    }

    @Transactional
    public QuestionBoardCommentDto.Info deleteComment(Integer commentId)
            throws RollbackException {
        QuestionBoardComment questionBoardComment = questionBoardCommentRepository.findById(commentId).get();
        return QuestionBoardCommentDto.Info.fromEntity(questionBoardCommentRepository.save(QuestionBoardComment.builder()
                        .questionBoard(questionBoardComment.getQuestionBoard())
                        .content(questionBoardComment.getContent())
                        .user(questionBoardComment.getUser())
                        .isDeleted(true)
                .build().updateId(commentId)));
    }

    @Transactional
    public List<QuestionBoardDto.Detail> getQuestionBoardListByLecture(Integer lectureId) throws RollbackException {
        return questionBoardRepository.findAllByIsDeletedIsFalseAndLecture_LectureId(lectureId).stream()
                .map(questionBoard -> {
                    QuestionBoardDto.Detail res = QuestionBoardDto.Detail.fromEntity(questionBoard);
                    res.setQuestionBoardComments(
                            QuestionBoardDto.Detail.fromEntity(questionBoard).getQuestionBoardComments().stream()
                                    .filter(comment -> !comment.isDeleted())
                                    .collect(Collectors.toList()));
                    return res;
                })
                .collect(Collectors.toList());
    }

}
