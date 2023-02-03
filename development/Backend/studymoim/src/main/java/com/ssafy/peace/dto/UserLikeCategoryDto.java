package com.ssafy.peace.dto;

import com.ssafy.peace.entity.UserLikeCategory;
import lombok.Builder;
import lombok.Data;


public class UserLikeCategoryDto {

    @Data
    @Builder
    public static class recommend {
        private int courseCategoryId;
        public static int fromEntity(UserLikeCategory userLikeCategory) {
            return userLikeCategory.getCourseCategory().getCourseCategoryId();
        }
    }

}
