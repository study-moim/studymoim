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

//        for (int i = 0; i < courseCategoryList.size(); i++) {
//            CourseCategory courseCategory = courseCategoryList.get(i);
//            boolean flag = false;
//            for (int j = 0; j < courseList.size(); j++) {
//                Course course = courseList.get(j);
//                if(course.getTitle().contains(courseCategory.getName_kor())) {
//                    courseTypeRepository.save(CourseType.builder()
//                            .course(course)
//                            .courseCategory(courseCategory)
//                            .build());
//                    flag = true;
//                } else if (course.getTitle().toLowerCase().contains(courseCategory.getName_eng().toLowerCase())) {
//                    courseTypeRepository.save(CourseType.builder()
//                            .course(course)
//                            .courseCategory(courseCategory)
//                            .build());
//                    flag = true;
//                }
//            }
//        }

        for (int i = 0; i < courseList.size(); i++) {
            boolean flag = false;
            Course course = courseList.get(i);
            for (int j = 0; j < courseCategoryList.size()-1; j++) {
                if(course.getTitle().contains(courseCategoryList.get(j).getName_kor())) {
                    courseTypeRepository.save(CourseType.builder()
                            .course(course)
                            .courseCategory(courseCategoryList.get(j))
                            .build());
                    flag = true;
                } else if (course.getTitle().contains(courseCategoryList.get(j).getName_eng())) {
                    courseTypeRepository.save(CourseType.builder()
                            .course(course)
                            .courseCategory(courseCategoryList.get(j))
                            .build());
                    flag = true;
                }
            }
            if(!flag) {
                courseTypeRepository.save(CourseType.builder()
                        .course(course)
                        .courseCategory(courseCategoryList.get(20))
                        .build());
            }
        }
    }
}
