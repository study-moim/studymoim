package com.ssafy.peace.service;

import com.ssafy.peace.entity.Course;
import com.ssafy.peace.entity.CourseCategory;
import com.ssafy.peace.entity.CourseType;
import com.ssafy.peace.repository.CourseCategoryRepository;
import com.ssafy.peace.repository.CourseRepository;
import com.ssafy.peace.repository.CourseTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseTypeService {

    private final CourseTypeRepository courseTypeRepository;
    private final CourseCategoryRepository courseCategoryRepository;
    private final CourseRepository courseRepository;

    @Transactional
    public void insertCourseType() {
        List<CourseCategory> courseCategoryList = courseCategoryRepository.findAll();
        List<Course> courseList = courseRepository.findAll();

        for (int i = 0; i < courseCategoryList.size(); i++) {
            CourseCategory courseCategory = courseCategoryList.get(i);
            for (int j = 0; j < courseList.size(); j++) {
                Course course = courseList.get(j);
                if(course.getTitle().contains(courseCategory.getName_kor())) {
                    courseTypeRepository.save(CourseType.builder()
                            .course(course)
                            .courseCategory(courseCategory)
                            .build());
                } else if (course.getTitle().contains(courseCategory.getName_eng())) {
                    courseTypeRepository.save(CourseType.builder()
                            .course(course)
                            .courseCategory(courseCategory)
                            .build());
                }
            }
        }
    }
}
