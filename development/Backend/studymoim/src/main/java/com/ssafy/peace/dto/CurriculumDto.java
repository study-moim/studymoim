package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Curriculum;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

public class CurriculumDto {

    @Data
    @Builder
    public static class Info {
        private int order;
        private CourseDto.Info course;
        public static Info fromEntity(Curriculum curriculumEntity) {
            return Info.builder()
                    .order(curriculumEntity.getCurriculumOrder())
                    .course(CourseDto.Info.fromEntity(curriculumEntity.getCourse()))
                    .build();
        }
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
