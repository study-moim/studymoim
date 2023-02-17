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

        for (int i = 0; i < courseList.size(); i++) {
            boolean etcCheck = false;
            boolean jsCheck = false;
            Course course = courseList.get(i);

            for (int j = 0; j < courseCategoryList.size()-1; j++) {
                // 자바스크립트에 포함 됐는데, 자바에도 들어가려고 하는 강의 처리
                if(jsCheck && j == 5)    continue;

                if(course.getTitle().contains(courseCategoryList.get(j).getName_kor())) {
                    courseTypeRepository.save(CourseType.builder()
                            .course(course)
                            .courseCategory(courseCategoryList.get(j))
                            .build());
                    etcCheck = true;
                    if(j == 3) jsCheck = true;
                } else if (course.getTitle().toLowerCase().contains(courseCategoryList.get(j).getName_eng().toLowerCase())) {
                    courseTypeRepository.save(CourseType.builder()
                            .course(course)
                            .courseCategory(courseCategoryList.get(j))
                            .build());
                    etcCheck = true;
                    if(j == 3) jsCheck = true;
                }
            }
            if(!etcCheck) {
                courseTypeRepository.save(CourseType.builder()
                        .course(course)
                        .courseCategory(courseCategoryList.get(20))
                        .build());
            }
        }
    }
}
