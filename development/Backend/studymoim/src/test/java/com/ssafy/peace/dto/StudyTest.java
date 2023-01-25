package com.ssafy.peace.dto;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.validation.*;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Set;

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
        Study.Recruit studyRecruit = Study.Recruit.builder().
                title("test1").
                content("This is a test content").
                saveName("path/to/test/image").
                userLimit(7).
                isPublic(true).
                notice("This is a test notice").
                curriculum(new ArrayList<Curriculum.Recruit>(
                        Arrays.asList(Curriculum.Recruit.builder(). // 멤버 객체를 테스트하기 위해선 따로 기능 구현 필요
                        order(1).
                        course(Course.Recruit.builder().
                                course_id(1).
                                title("test1").
                                content("This is a test content").
                                lastUpdateDate(new Timestamp(100L)).
                                isDeleted(false).
                                lectures(new ArrayList<Lecture.Recruit>(Arrays.asList(
                                        Lecture.Recruit.builder().build(),
                                        Lecture.Recruit.builder().build()))).
                                providerId(1).
                                providerUrl("path/to/test/image").
                                providerPlatformId(1).
                                providerPlatformName("Youtube").
                                providerChannelId(1).
                                providerChannelName("LivingCoding").
                                build()).
                        build())))
                .build();

        Set<ConstraintViolation<Study.Recruit>> violations = validator.validate(studyRecruit);
        for(ConstraintViolation<Study.Recruit> v : violations) {
            System.out.println(v.getMessage());
        }
        assertEquals(0, violations.size());
    }

}
