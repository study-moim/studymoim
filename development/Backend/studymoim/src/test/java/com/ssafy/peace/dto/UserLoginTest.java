package com.ssafy.peace.dto;

import com.ssafy.peace.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserLoginTest {

    private Validator validator;

    @BeforeEach
    public void setUp() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }

    @Test
    void userLoginValidationTest() {
        UserLogin userLogin = UserLogin.builder().
            //@Size(min=5, max=50, message = "바르지 않은 email 크기 입니다")
            //@NotEmpty(message="email은 빈값 일 수 없습니다")
            //@NotNull(message="email은 null 일 수 없습니다")
            //@Pattern(regexp="^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$")
            email("testemail.com").
            //@Size(min=8, max=20, message = "바르지 않은 password 크기 입니다")
            //@NotEmpty(message="password는 빈값 일 수 없습니다")
            //@NotNull(message="password는 null 일 수 없습니다")
            //@Pattern(regexp="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$")
            password("ihateauth30").
            //@Size(min=2, max=6, message = "바르지 않은 password 크기 입니다")
            //@NotEmpty(message="nickname은 빈값 일 수 없습니다")
            //@NotNull(message="nickname은 null 일 수 없습니다")
            nickname("임꺽정").
            //@Size(max = 255)
            saveName("path/to/image").
            build();

        Set<ConstraintViolation<UserLogin>> violations = validator.validate(userLogin);
        for(ConstraintViolation<UserLogin> v : violations) {
            System.out.println(v.getMessage());
        }
        assertEquals(1, violations.size());
    }

}
