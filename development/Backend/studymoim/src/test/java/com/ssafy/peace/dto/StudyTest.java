package com.ssafy.peace.dto;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.validation.*;

import java.sql.Timestamp;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class StudyTest {

    private Validator validator;

    @BeforeEach
    public void setUp() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }
    
    @Test
    void studyMakeValidationTest() {
        Study.Make studyMake = Study.Make.builder().
                title("test1").
                content("This is a test content").
                saveName("path/to/test/image").
                userLimit(7).
                isPublic(true).
                notice("This is a test notice").
                curriculum(Curriculum.Make.builder(). // 멤버 객체를 테스트하기 위해선 따로 기능 구현 필요
                        order(1).
                        courseId(1).
                        build())
                .build();

        Set<ConstraintViolation<Study.Make>> violations = validator.validate(studyMake);
        for(ConstraintViolation<Study.Make> v : violations) {
            System.out.println(v.getMessage());
        }
        assertEquals(1, violations.size());
    }

    @Test
    void studyRecruitBuildTest() {
        Study.Recruit studyMake = Study.Recruit.builder().
                title("test1").
                content("This is a test content").
                saveName("path/to/test/image").
                userLimit(7).
                isPublic(true).
                notice("This is a test notice").
                curriculum(Curriculum.Recruit.builder(). // 멤버 객체를 테스트하기 위해선 따로 기능 구현 필요
                        order(1).
                        course(Course.Recruit.builder().
                                course_id(1).
                                title("test1").
                                content("This is a test content").
                                lastUpdateDate((Timestamp) new Date("2020-11-12")).
                                isDeleted(false).
                                lectures(new ArrayList<Lecture.Recruit>(Arrays.asList(
                                        new Lecture.Recruit[]{
                                                Lecture.Recruit.builder().build(),
                                                Lecture.Recruit.builder().build()
                                })).
                                providerId().
                                providerUrl().
                                providerPlatformId().
                                providerPlatformName().
                                providerChannelId().
                                providerChannelName().
                                build()).
                        build())
                .build();

        Set<ConstraintViolation<Study.Make>> violations = validator.validate(studyMake);
        for(ConstraintViolation<Study.Make> v : violations) {
            System.out.println(v.getMessage());
        }
        assertEquals(1, violations.size());
    }

}
