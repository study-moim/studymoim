package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

public class CurriculumDto {

    @Data
    @Builder
    public static class Info {
        private int order;
        private CourseDto.Recruit course;
    }

    @Data
    @Builder
    public static class Recruit {
        private int order;
        private CourseDto.Recruit course;
    }

    /* Request DTO */
    @Data
    @Builder
    public static class Make {
        @NotNull(message="order은 null 일 수 없습니다")
        private int order;
        @NotNull(message="courseId은 null 일 수 없습니다")
        private int courseId;
    }

}
