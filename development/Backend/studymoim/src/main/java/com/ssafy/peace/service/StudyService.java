package com.ssafy.peace.service;

import com.ssafy.peace.dto.CourseDto;
import com.ssafy.peace.dto.QuestionBoardDto;
import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.dto.StudyHistoryDto;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.RollbackException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudyService {

    private final StudyRepository studyRepository;
    private final StudyMemberRepository studyMemberRepository;
    private final StudyHistoryRepository studyHistoryRepository;
    private final UserRepository userRepository;
    private final CurriculumRepository curriculumRepository;
    private final CourseRepository courseRepository;

    @Transactional
    public List<StudyDto.Info> getStudyList() throws RollbackException{
        return studyRepository.findAllByIsCloseIsFalseAndIsPublicIsTrue()
                .stream()
                .map(StudyDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public StudyDto.Detail getStudyDetail(Integer studyId) throws RollbackException{
        Optional<Study> result = studyRepository.findById(studyId);
        if(!result.isPresent()) return null;
        return StudyDto.Detail.fromEntity(result.get());
    }

    @Transactional
    public List<StudyHistoryDto.Info> getStudyHistory(Integer studyId) throws RollbackException{
        Optional<Study> result = studyRepository.findById(studyId);
        if(!result.isPresent()) return null;
        return studyHistoryRepository.findAllByStudy_studyId(studyId).stream()
                .map(StudyHistoryDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public StudyDto.Info makeStudy(StudyDto.Make study) throws RollbackException {
        Study newStudy = Study.builder()
                .title(study.getTitle())
                .content(study.getContent())
                .startTime(study.getStartTime())
                .saveName(study.getSaveName())
                .userLimit(study.getUserLimit())
                .isPublic(study.isPublic())
                .build();
        StudyDto.Info result = StudyDto.Info.fromEntity(studyRepository.save(newStudy));
        // 임시로 더미 데이터 넣어놓음
        studyMemberRepository.save(StudyMember.builder()
                .user(userRepository.findByNickname("싸피킴"))
                .study(newStudy)
                .memberRole(true)
                .build());
        // 커리큘럼이랑 연결
        System.out.println("WWWWWWWWWWWWW");
        List<Curriculum> curricula = new ArrayList<>();
        int order = 0;
        for(CourseDto.Info course : study.getCourseList()){
            Curriculum curriculum = Curriculum.builder()
                    .course(courseRepository.findById(course.getCourse_id()).get())
                    .study(newStudy)
                     .curriculumOrder(order++)
                    .build();
            curricula.add(curriculum);
        }
        System.out.println(curricula);
        curriculumRepository.saveAll(curricula);


        return result;
    }

//    public StudyDto.Recruit recruitStudy(StudyDto.Info study) throws RollbackException{
//
//    }


}
