package com.ssafy.peace.service;

import com.ssafy.peace.dto.CourseDto;
import com.ssafy.peace.entity.UserLikeCourse;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional(readOnly = true)
    public List<CourseDto.Info> getCourseInfoListFindAll() {
        // Course -> CourseDto.Info
        return courseRepository.findAll().stream()
                .map(CourseDto.Info::fromEntity)
                .collect(Collectors.toList());

    }

    @Transactional(readOnly = true)
    public List<CourseDto.Info> getCourseInfoListFindByName(String searchtext) {
        return courseRepository.findAllByTitleContains(searchtext).stream()
                .map(CourseDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Object getCourseRecruit(int courseId) {
        return courseRepository.findById(courseId)
                .map(CourseDto.Recruit::fromEntity);
    }
}
