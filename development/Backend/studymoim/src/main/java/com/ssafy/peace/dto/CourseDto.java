package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Course;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

public class CourseDto {

    @Data
    @Builder
    public static class Info {
        private int course_id;
        private String title;
        private String content;
        private LocalDateTime lastUpdateDate;
        private CourseProviderDto.Bio courseProvider;
        public static Info fromEntity(Course courseEntity) {
            return Info.builder()
                    .course_id(courseEntity.getCourseId())
                    .title(courseEntity.getTitle())
                    .content(courseEntity.getContent())
                    .courseProvider(CourseProviderDto.Bio.fromEntity(courseEntity.getCourseProvider()))
                    .build();
        }
    }

    @Data
    @Builder
    public static class Recruit {
        private int course_id;
        private String title;
        private String content;
        private Timestamp lastUpdateDate;
        private List<LectureDto.Recruit> lectures;
        private int providerId;
        private String providerUrl;
        private int providerPlatformId;
        private String providerPlatformName;
        private int providerChannelId;
        private String providerChannelName;

    }

}
