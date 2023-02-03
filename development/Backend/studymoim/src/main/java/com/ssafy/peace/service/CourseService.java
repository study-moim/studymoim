package com.ssafy.peace.service;

import com.ssafy.peace.dto.CourseDto;
import com.ssafy.peace.dto.CurriculumDto;
import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.entity.Curriculum;
import com.ssafy.peace.entity.UserLikeCourse;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;
    private final LectureRepository lectureRepository;
    private final CourseTypeRepository courseTypeRepository;
    private final CurriculumRepository curriculumRepository;
    private final UserLikeCourseRepository userLikeCourseRepository;
    private final CourseProviderRepository courseProviderRepository;
    private final StudyRepository studyRepository;

    @Transactional(readOnly = true)
    public List<CourseDto.Info> getCourseInfoListFindAll() {
        // Course -> CourseDto.Info
        return courseRepository.findAll().stream()
                .map(CourseDto.Info::fromEntity)
                .collect(Collectors.toList());

    }

    @Transactional(readOnly = true)
    public List<CourseDto.Info> getCourseInfoListFindByName(String searchText) {
        return courseRepository.findAllByTitleContains(searchText).stream()
                .map(CourseDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Object getCourseRecruit(int courseId) {
        return courseRepository.findById(courseId)
                .map(CourseDto.Recruit::fromEntity);
    }

    @Transactional(readOnly = true)
    public List<StudyDto.Info> getStudyAttendingCourse(Integer courseId){
        List<StudyDto.Info> result = new ArrayList<>();
        List<Curriculum> curricula = curriculumRepository.findAllByCourse_CourseId(courseId);
        for (Curriculum curriculum :
                curricula) {
            result.add(studyRepository.findById(curriculum.getStudy().getStudyId())
                    .map(StudyDto.Info::fromEntity).get());
        }
        return result;
    }
}
