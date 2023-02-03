package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Course;
import com.ssafy.peace.entity.CourseProvider;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class CourseDto {


    // 강좌 목록에서 보여줄 DTO
    @Data
    @Builder
    public static class Info {
        private int course_id;
        private String title;
        private String content;
        private String thumbnail;

//        private CourseProviderDto.Info courseProvider;
        private String courseProviderName;
        private int likeUserCount;
//        private List<CourseCategoryDto.Info> categoryList;
        private List<CourseCategoryDto.Info> categoryList;

        public static Info fromEntity(Course courseEntity) {
            return Info.builder()
                    .course_id(courseEntity.getCourseId())
                    .title(courseEntity.getTitle())
                    .content(courseEntity.getContent())
                    .thumbnail(courseEntity.getThumbnail())
//                    .courseProvider(CourseProviderDto.Info.fromEntity(courseEntity.getCourseProvider()))
                    .courseProviderName(CourseProviderDto.Info.fromEntity(courseEntity.getCourseProvider()).getName())
                    .likeUserCount(courseEntity.getUserLikeCourses().size())
                    .categoryList(courseEntity.getCourseTypes().stream().map(courseType ->
                        CourseCategoryDto.Info.fromEntity(courseType.getCourseCategory())
                    ).collect(Collectors.toList()))
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
        private List<LectureDto.Info> lectures;
        private String providerPlatformName;
        private String providerChannelName;

        public static Recruit fromEntity(Course courseEntity) {
            return Recruit.builder()
                    .course_id(courseEntity.getCourseId())
                    .title(courseEntity.getTitle())
                    .content(courseEntity.getContent())
                    .thumbnail(courseEntity.getThumbnail())
                    .lectures(courseEntity.getLectures().stream().map(LectureDto.Info::fromEntity).collect(Collectors.toList()))
                    .providerPlatformName(courseEntity.getCourseProvider().getPlatform().getName())
                    .providerChannelName(courseEntity.getCourseProvider().getName())
                    .build();
        }
    }

}
