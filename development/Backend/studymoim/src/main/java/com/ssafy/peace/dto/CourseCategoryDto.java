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
        private String name_kor;
        private String name_eng;
        private String imgurl;
        private int userLikeCount;
        public static Info fromEntity(CourseCategory categoryEntity) {
            return Info.builder()
                    .courseCategoryId(categoryEntity.getCourseCategoryId())
                    .name_kor(categoryEntity.getName_kor())
                    .name_eng(categoryEntity.getName_eng())
                    .imgurl(categoryEntity.getImgurl())
                    .userLikeCount(categoryEntity.getUserLikeCategories().size())
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
