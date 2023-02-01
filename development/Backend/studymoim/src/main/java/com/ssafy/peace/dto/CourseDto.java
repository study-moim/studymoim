package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Course;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

public class CourseDto {

    // 강좌 목록에서 보여줄 DTO
    @Data
    @Builder
    public static class Info {
        private int course_id;
        private String title;
        private String content;
        private String thumbnail;
        private CourseProviderDto.Info courseProvider;
        public static Info fromEntity(Course courseEntity) {
            return Info.builder()
                    .course_id(courseEntity.getCourseId())
                    .title(courseEntity.getTitle())
                    .content(courseEntity.getContent())
                    .thumbnail(courseEntity.getThumbnail())
                    .courseProvider(CourseProviderDto.Info.fromEntity(courseEntity.getCourseProvider()))
                    .build();
        }
    }

    // 구인 페이지에서 알려줄 DTO
    @Data
    @Builder
    public static class Recruit {
        private int course_id;
        private String title;
        private String content;
        private String thumbnail;
        private List<LectureDto.Recruit> lectures;
        private int providerId;
        private String providerUrl;
        private int providerPlatformId;
        private String providerPlatformName;
        private int providerChannelId;
        private String providerChannelName;

        public static Recruit fromEntity(Course courseEntity) {
            return Recruit.builder()
                    .course_id(courseEntity.getCourseId())
                    .title(courseEntity.getTitle())
                    .content(courseEntity.getContent())
                    .thumbnail(courseEntity.getThumbnail())
                    .build();
        }
    }

}
