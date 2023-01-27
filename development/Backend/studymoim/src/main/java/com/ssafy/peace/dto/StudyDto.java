package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.List;

public class StudyDto {

    @Data
    @Builder
    public static class Info {
        private int studyId;
        private Timestamp creationTime;
        private String title;
        private String content;
        private String saveName;
        private boolean isOpen;
        private int userLimit;
        private boolean isPublic;
        private String notice;
        private boolean isFinished;
        private List<UserDto.Info> members;
        private List<CurriculumDto.Info> curriculum;
        private Timestamp startTime;
        private Timestamp endTime;
    }

    @Data
    @Builder
    public static class Recruit {
        private int studyId;
        private Timestamp creationTime;
        private String title;
        private String content;
        private String saveName;
        private boolean isOpen;
        private int userLimit;
        private boolean isPublic;
        private String notice;
        private boolean isFinished;
        private List<UserDto.Info> members;
        private List<CurriculumDto.Recruit> curriculum;
        private Timestamp startTime;
        private Timestamp endTime;
    }

    /* Request DTO */
    @Data
    @Builder
    public static class Make {
        @Size(min=5, max=30, message = "바르지 않은 title 크기 입니다")
        @NotNull(message="title은 null 일 수 없습니다")
        @NotEmpty(message="title은 빈값 일 수 없습니다")
        private String title;
        @NotNull(message="content은 null 일 수 없습니다")
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        private String content;
        @Size(max = 255)
        private String saveName;
        @Max(value = 6, message = "userLimit은 7명 이상일 수 없습니다.")
        @NotNull(message="userLimit은 null 일 수 없습니다")
        private int userLimit;
        @NotNull(message="isPublic은 null 일 수 없습니다")
        private boolean isPublic;
        @Size(max = 100, message = "바르지 않은 notice 크기 입니다")
        private String notice;
        @NotNull(message="curriculum은 null 일 수 없습니다")
        private CurriculumDto.Make curriculum;
    }

    @Data
    @Builder
    public static class NowPlay {
        private int studyId;
        private int course_id;
        private String title;
        private String content;
        private Timestamp lastUpdateDate;
        private boolean isDeleted;
        private int providerId;
        private String providerUrl;
        private int providerPlatformId;
        private String providerPlatformName;
        private int providerChannelId;
        private String providerChannelName;

        // 여기서부터 강의 정보
        // 지금 재생중인 강의 한개
        // Service단에서 StudyHistory를 통해 현재 재생중인 강의를 찾아낸다.
        private LectureDto.Info lecture;
    }

    @Data
    @Builder
    public static class Community {
        private int studyId;
        private int studyCommunityId;
        private String content;
        private Timestamp publishTime;
        private boolean isDeleted;
        private UserDto.Info user;
    }

}
