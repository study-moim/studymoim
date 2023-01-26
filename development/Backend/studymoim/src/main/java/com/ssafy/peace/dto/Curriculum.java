package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

public class Curriculum {

    @Data
    @Builder
    public static class Recruit {
        private int order;
        private Course.Recruit course;
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
