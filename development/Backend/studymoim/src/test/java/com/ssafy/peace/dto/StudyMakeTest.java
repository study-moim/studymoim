package com.ssafy.peace.dto;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.validation.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

public class StudyMakeTest {

    private Validator validator;

    @BeforeEach
    public void setUp() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }
    
    @Test
    void studyMakeValidationTest() {
        StudyMake studyMake = StudyMake.builder().
                title("test1").
                content("This is a test content").
                saveName("path/to/test/image").
                userLimit(7).
                isPublic(true).
                notice("This is a test notice").
                curriculum(CurriculumMake.builder(). // 멤버 객체를 테스트하기 위해선 따로 기능 구현 필요
                        order(1).
                        courseId(1).
                        build())
                .build();

        Set<ConstraintViolation<StudyMake>> violations = validator.validate(studyMake);
        for(ConstraintViolation<StudyMake> v : violations) {
            System.out.println(v.getMessage());
        }
        assertEquals(1, violations.size());
    }

}
