package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.QuestionBoardDto;
import com.ssafy.peace.entity.Course;
import com.ssafy.peace.entity.QuestionBoard;
import com.ssafy.peace.entity.Study;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.RollbackException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionBoardService {

    private final QuestionBoardRepository questionBoardRepository;
    private final UserRepository userRepository;
    private final StudyRepository studyRepository;
    private final CourseRepository courseRepository;
    @Transactional
    public List<QuestionBoardDto.Info> getQuestionBoardList() throws RollbackException {
        return questionBoardRepository.findAllByIsDeletedIsFalse().stream()
                .map(QuestionBoardDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public QuestionBoardDto.Info writeQuestion(QuestionBoardDto.Write questionBoardDto) throws RollbackException {
        Course course = courseRepository.findById(questionBoardDto.getCourseId()).get();
        User user = userRepository.findById(questionBoardDto.getUserId()).get();
        Study study = studyRepository.findById(questionBoardDto.getStudyId()).get();
        return QuestionBoardDto.Info.fromEntity(questionBoardRepository.save(QuestionBoard.builder()
                .title(questionBoardDto.getTitle())
                .content(questionBoardDto.getContent())
                .isPublic(questionBoardDto.isPublic())
                .course(course)
                .user(user)
                .study(study)
                .build()));
    }

}
