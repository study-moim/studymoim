package com.ssafy.peace.dto;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.ActiveProfiles;

import javax.validation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

public class StudyDtoTest {

    private Validator validator;

    @BeforeEach
    public void setUp() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }
    
//    @Test
//    void studyMakeValidationTest() {
//        StudyDto.Make studyMake = StudyDto.Make.builder().
//                title("test1").
//                content("This is a test content").
//                saveName("path/to/test/image").
//                userLimit(7).
//                isPublic(true).
//                notice("This is a test notice").
//                curriculum(CurriculumDto.Make.builder(). // 멤버 객체를 테스트하기 위해선 따로 기능 구현 필요
//                        order(1).
//                        courseId(1).
//                        build())
//                .build();
//
//        Set<ConstraintViolation<StudyDto.Make>> violations = validator.validate(studyMake);
//        for(ConstraintViolation<StudyDto.Make> v : violations) {
//            System.out.println(v.getMessage());
//        }
//        assertEquals(1, violations.size());
//    }

//    @Test
//    void studyRecruitBuildTest() {
//        StudyDto.Recruit studyRecruit = StudyDto.Recruit.builder().
//                title("test1").
//                content("This is a test content").
//                saveName("path/to/test/image").
//                userLimit(7).
//                isPublic(true).
//                notice("This is a test notice").
//                curriculum(new ArrayList<CurriculumDto.Recruit>(
//                        Arrays.asList(CurriculumDto.Recruit.builder(). // 멤버 객체를 테스트하기 위해선 따로 기능 구현 필요
//                        order(1).
//                        course(CourseDto.Recruit.builder().
//                                course_id(1).
//                                title("test1").
//                                content("This is a test content").
//                                thumbnail("/asdf/zxcv/wqer").
//                                lectures(new ArrayList<LectureDto.Info>(Arrays.asList(
//                                        LectureDto.Info.builder().build(),
//                                        LectureDto.Info.builder().build()))).
//                                providerPlatformName("Youtube").
//                                providerChannelName("LivingCoding").
//                                build()).
//                        build())))
//                .build();
//
//        Set<ConstraintViolation<StudyDto.Recruit>> violations = validator.validate(studyRecruit);
//        for(ConstraintViolation<StudyDto.Recruit> v : violations) {
//            System.out.println(v.getMessage());
//        }
//        assertEquals(0, violations.size());
//    }

}
