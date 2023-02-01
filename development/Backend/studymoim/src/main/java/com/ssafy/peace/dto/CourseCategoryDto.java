package com.ssafy.peace.dto;

import com.ssafy.peace.entity.CourseCategory;
import lombok.Builder;
import lombok.Data;

import java.util.List;

public class CourseCategoryDto {

    @Data
    @Builder
    public static class Info {
        private int courseCategoryId;
        private String name;
        public static Info fromEntity(CourseCategory categoryEntity) {
            return Info.builder()
                    .courseCategoryId(categoryEntity.getCourseCategoryId())
                    .name(categoryEntity.getName())
                    .build();
        }
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
