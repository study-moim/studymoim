package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

public class CourseCategoryDto {

    @Data
    @Builder
    public static class Info {
        private int courseCategoryId;
        private String name;
    }

    @Data
    @Builder
    public static class Search {
        private int courseCategoryId;
        private String name;

        /* 카테고리에 관련 된 강좌 목록 */
        private List<CourseDto> courses;
    }

}
