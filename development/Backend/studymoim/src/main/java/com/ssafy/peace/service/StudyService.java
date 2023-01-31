package com.ssafy.peace.service;

import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.repository.StudyRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudyService {

    private final StudyRepository studyRepository;

    private final UserRepository userRepository;

    @Transactional
    public List<StudyDto.Info> getStudyList(){
        return studyRepository.findAllByIsOpenIsTrueAndIsPublicIsTrue()
                .stream()
                .map(StudyDto.Info::fromEntity)
                .collect(Collectors.toList());
    }


}
