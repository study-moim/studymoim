package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.QuestionBoardCommentDto;
import com.ssafy.peace.dto.QuestionBoardDto;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.RollbackException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionBoardService {

    private final QuestionBoardRepository questionBoardRepository;
    private final QuestionBoardCommentRepository questionBoardCommentRepository;
    private final UserRepository userRepository;
    private final StudyRepository studyRepository;
    private final LectureRepository lectureRepository;
    @Transactional
    public Page<QuestionBoardDto.Info> getQuestionBoardList(Pageable pageable) throws RollbackException {
//        return questionBoardRepository.findAllByIsDeletedIsFalse().stream()
//                .map(QuestionBoardDto.Info::fromEntity)
//                .collect(Collectors.toList());
        return questionBoardRepository.findAllByIsDeletedIsFalse(pageable)
                .map(m -> QuestionBoardDto.Info.fromEntity(m));
    }

    @Transactional
    public QuestionBoardDto.Detail getQuestionBoardDetail(Integer lectureId) throws RollbackException {
        Optional<QuestionBoard> result = questionBoardRepository.findById(lectureId);
        if(!result.isPresent()) return null;
        return QuestionBoardDto.Detail.fromEntity(result.get());
    }

    @Transactional
    public QuestionBoardDto.Info writeQuestion(QuestionBoardDto.Write questionBoardDto) throws RollbackException {
        return QuestionBoardDto.Info.fromEntity(questionBoardRepository.save(QuestionBoard.builder()
                .title(questionBoardDto.getTitle())
                .content(questionBoardDto.getContent())
                .isPublic(questionBoardDto.isPublic())
                .lecture(lectureRepository.findById(questionBoardDto.getLectureId()).get())
                .user(userRepository.findById(questionBoardDto.getUserId()).get())
                .study(studyRepository.findById(questionBoardDto.getStudyId()).get())
                .build()));
    }

    @Transactional
    public QuestionBoardDto.Info updateQuestion(Integer questionBoardId, QuestionBoardDto.Write questionBoardDto) throws RollbackException {
        return QuestionBoardDto.Info.fromEntity(questionBoardRepository.save(QuestionBoard.builder()
                .title(questionBoardDto.getTitle())
                .content(questionBoardDto.getContent())
                .isPublic(questionBoardDto.isPublic())
                .lecture(lectureRepository.findById(questionBoardDto.getLectureId()).get())
                .user(userRepository.findById(questionBoardDto.getUserId()).get())
                .study(studyRepository.findById(questionBoardDto.getStudyId()).get())
                .build()
                .updateId(questionBoardId)));
    }

    @Transactional
    public void deleteQuestion(Integer questionBoardId) throws RollbackException {
        questionBoardRepository.deleteById(questionBoardId);
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
                        .content("(삭제된 메시지 입니다.)")
                        .user(questionBoardComment.getUser())
                        .isDeleted(true)
                .build().updateId(commentId)));
    }

    @Transactional
    public List<QuestionBoardDto.Info> getQuestionBoardListByLecture(Integer lectureId) throws RollbackException {
        return questionBoardRepository.findAllByIsDeletedIsFalseAndLecture_LectureId(lectureId).stream()
                .map(QuestionBoardDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

}
