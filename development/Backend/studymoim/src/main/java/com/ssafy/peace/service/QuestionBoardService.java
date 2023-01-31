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
    public List<QuestionBoardDto.Info> getQuestionBoardList() throws RollbackException {
        return questionBoardRepository.findAllByIsDeletedIsFalse().stream()
                .map(QuestionBoardDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public QuestionBoardDto.Detail getQuestionBoardDetail(Integer lectureId) throws RollbackException {
        Optional<QuestionBoard> result = questionBoardRepository.findById(lectureId);
        if(!result.isPresent()) return null;
        return QuestionBoardDto.Detail.fromEntity(result.get());
    }

    @Transactional
    public QuestionBoardDto.Info writeQuestion(QuestionBoardDto.Write questionBoardDto) throws RollbackException {
        Lecture lecture = lectureRepository.findById(questionBoardDto.getLectureId()).get();
        User user = userRepository.findById(questionBoardDto.getUserId()).get();
        Study study = studyRepository.findById(questionBoardDto.getStudyId()).get();
        return QuestionBoardDto.Info.fromEntity(questionBoardRepository.save(QuestionBoard.builder()
                .title(questionBoardDto.getTitle())
                .content(questionBoardDto.getContent())
                .isPublic(questionBoardDto.isPublic())
                .lecture(lecture)
                .user(user)
                .study(study)
                .build()));
    }

    @Transactional
    public QuestionBoardCommentDto.Info writeComment(Integer articleId, QuestionBoardCommentDto.Write questionBoardCommentDto)
            throws RollbackException {
        QuestionBoardComment parentComment;
        if(questionBoardCommentDto.getParentCommentId() == null) parentComment = null;
        else parentComment = questionBoardCommentRepository.findById(questionBoardCommentDto.getParentCommentId()).get();
        return QuestionBoardCommentDto.Info.fromEntity(questionBoardCommentRepository.save(QuestionBoardComment.builder()
                .content(questionBoardCommentDto.getContent())
                .parentComment(parentComment)
                .questionBoard(questionBoardRepository.findById(questionBoardCommentDto.getQuestionBoardId()).get())
                .user(userRepository.findById(questionBoardCommentDto.getUserId()).get())
                .build()));
    }

    @Transactional
    public List<QuestionBoardDto.Info> getQuestionBoardListByLecture(Integer lectureId) throws RollbackException {
        return questionBoardRepository.findAllByIsDeletedIsFalseAndLecture_LectureId(lectureId).stream()
                .map(QuestionBoardDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

}
