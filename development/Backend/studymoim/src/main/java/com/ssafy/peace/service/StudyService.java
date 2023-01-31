package com.ssafy.peace.service;

import com.ssafy.peace.dto.CourseDto;
import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.dto.UserDto;
import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.Study;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.FreeBoardRepository;
import com.ssafy.peace.repository.StudyRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.RollbackException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudyService {

    private final StudyRepository studyRepository;

    private final UserRepository userRepository;
    private final FreeBoardRepository freeBoardRepository;

    @Transactional
    public List<StudyDto.Info> getStudyList() {
        return studyRepository.findAllByIsOpenIsTrueAndIsPublicIsTrue()
                .stream()
                .map(StudyDto.Info::fromEntity)
                .collect(Collectors.toList());
    }


    @Transactional
    public StudyDto.Info makeStudy(StudyDto.Make study) throws RollbackException {
        return StudyDto.Info.fromEntity(studyRepository.save(Study.builder()
                .title(study.getTitle())
                .content(study.getContent())
                .saveName(study.getSaveName())
                .userLimit(study.getUserLimit())
                .isPublic(study.isPublic())
                .build()));
    }

//    public StudyDto.Recruit recruitStudy(StudyDto.Info study) throws RollbackException{
//
//    }


}
