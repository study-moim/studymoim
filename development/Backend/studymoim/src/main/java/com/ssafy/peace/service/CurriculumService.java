package com.ssafy.peace.service;

import com.ssafy.peace.dto.AlarmDto;
import com.ssafy.peace.dto.CourseDto;
import com.ssafy.peace.dto.CurriculumDto;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.CourseRepository;
import com.ssafy.peace.repository.CurriculumRepository;
import com.ssafy.peace.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CurriculumService {

    private final CurriculumRepository curriculumRepository;
    private final CourseRepository courseRepository;
    private final StudyRepository studyRepository;

    @Transactional
    public CurriculumDto.Info makeCurriculum() {
        Course course = courseRepository.findById(12).get();
        Study study = studyRepository.findById(21).get();
        System.out.println(course);
        System.out.println(study);
        Curriculum newCurriculum = curriculumRepository.save(Curriculum.builder()
                .course(course)
                .study(study)
                .curriculumOrder(0)
                .build());
        System.out.println(newCurriculum);
        return CurriculumDto.Info.fromEntity(newCurriculum);


    }

}
