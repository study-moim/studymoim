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

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CurriculumService {

    private final CurriculumRepository curriculumRepository;
    private final CourseRepository courseRepository;
    private final StudyRepository studyRepository;

    @Transactional
    public void updateCurriculum(CurriculumDto.Curricula curriculumDto){
        List<Curriculum> deleteCurricula = curriculumRepository.findAllByStudy_StudyIdOrderByCurriculumOrderAsc(curriculumDto.getStudyId());
        curriculumRepository.deleteAll(deleteCurricula);
        List<Curriculum> curricula = new ArrayList<>();
        Study study = studyRepository.findById(curriculumDto.getStudyId()).get();
        int order = 0;
        for(int courseId : curriculumDto.getCourseIdList()){
            Curriculum curriculum = Curriculum.builder()
                    .course(courseRepository.findById(courseId).get())
                    .study(study)
                    .curriculumOrder(order++)
                    .build();
            curricula.add(curriculum);
        }
        curriculumRepository.saveAll(curricula);

    }
}
