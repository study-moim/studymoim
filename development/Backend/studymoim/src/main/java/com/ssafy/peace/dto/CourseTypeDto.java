package com.ssafy.peace.dto;

import com.ssafy.peace.entity.CourseType;
import com.ssafy.peace.entity.UserLikeCategory;
import lombok.Builder;
import lombok.Data;

public class CourseTypeDto {
    @Data
    @Builder
    public static class recommend {
        private int courseId;
        public static int fromEntity(CourseType courseType) {
            return courseType.getCourse().getCourseId();
        }
    }
}
