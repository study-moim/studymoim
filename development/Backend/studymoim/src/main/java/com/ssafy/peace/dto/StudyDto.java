package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Course;
import com.ssafy.peace.entity.Study;
import com.ssafy.peace.entity.StudyMember;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class StudyDto {

    @Data
    @Builder
    public static class Info {
        private int studyId;
        private LocalDateTime creationTime;
        private String title;
        private String content;
        private LocalDateTime startTime;
        private String saveName;
        private boolean isClose;
        private int userLimit;
        private boolean isPublic;
        private String notice;
        private boolean isFinished;
        private List<StudyMemberDto.StudyInfo> members;
        private List<CurriculumDto.Info> curricula;
        public static Info fromEntity(Study studyEntity) {
            return Info.builder()
                    .studyId(studyEntity.getStudyId())
                    .creationTime(studyEntity.getCreationTime())
                    .title(studyEntity.getTitle())
                    .content(studyEntity.getContent())
                    .startTime(studyEntity.getStartTime())
                    .saveName(studyEntity.getSaveName())
                    .isClose(studyEntity.isClose())
                    .userLimit(studyEntity.getUserLimit())
                    .isPublic(studyEntity.isPublic())
                    .notice(studyEntity.getNotice())
                    .isFinished(studyEntity.isFinished())
                    .members(studyEntity.getStudyMembers().stream()
                            .map(member -> StudyMemberDto.StudyInfo.fromEntity(member))
                            .collect(Collectors.toList()))
                    .curricula(studyEntity.getCurricula().stream()
                            .map(curriculum -> CurriculumDto.Info.fromEntity(curriculum))
                            .collect(Collectors.toList()))
                    .build();
        }
    }

    @Data
    @Builder
    public static class Recruit {
        private int studyId;
        private LocalDateTime creationTime;
        private String title;
        private String content;
        private LocalDateTime startTime;
        private String saveName;
        private boolean isClose;
        private int userLimit;
        private boolean isPublic;
        private String notice;
        private boolean isFinished;
        private int userGathered; // 모인 사람 수
        public static Recruit fromEntity(Study studyEntity) {
            return Recruit.builder()
                    .studyId(studyEntity.getStudyId())
                    .startTime(studyEntity.getCreationTime())
                    .title(studyEntity.getTitle())
                    .content(studyEntity.getContent())
                    .saveName(studyEntity.getSaveName())
                    .isClose(studyEntity.isClose())
                    .userLimit(studyEntity.getUserLimit())
                    .userGathered(studyEntity.getStudyMembers().size())
                    .isPublic(studyEntity.isPublic())
                    .build();
        }
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
        @NotNull(message="startTime은 null 일 수 없습니다")
        @NotEmpty(message="startTime은 빈값 일 수 없습니다")
        private LocalDateTime startTime;
        @Size(max = 255)
        private String saveName;
        @Max(value = 6, message = "userLimit은 7명 이상일 수 없습니다.")
        @NotNull(message="userLimit은 null 일 수 없습니다")
        private int userLimit;
        @NotNull(message="isPublic은 null 일 수 없습니다")
        private boolean isPublic;
        @Size(max = 100, message = "바르지 않은 notice 크기 입니다")
        private String notice;
        @NotNull(message="강좌 선택은 null 일 수 없습니다")
        private List<CourseDto.Info> courseList;
    }

    @Data
    @Builder
    public static class NowPlay {
        private int studyId;
        private int course_id;
        private String title;
        private String content;
        private LocalDateTime lastUpdateDate;
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
        private LocalDateTime publishTime;
        private boolean isDeleted;
        private UserDto.Info user;
    }

    @Data
    @Builder
    public static class Detail {
        private int studyId;
        private String title;
        private String content;
        private LocalDateTime startTime;
        private String saveName;
        private boolean isClose;
        private int userLimit;
        private int userGathered; // 모인 사람 수
        private boolean isPublic;

        private List<StudyMemberDto.StudyInfo> members;
        private List<CurriculumDto.Recruit> curricula;
        public static Detail fromEntity(Study studyEntity) {
            return Detail.builder()
                    .studyId(studyEntity.getStudyId())
                    .startTime(studyEntity.getCreationTime())
                    .title(studyEntity.getTitle())
                    .content(studyEntity.getContent())
                    .saveName(studyEntity.getSaveName())
                    .isClose(studyEntity.isClose())
                    .userLimit(studyEntity.getUserLimit())
                    .userGathered(studyEntity.getStudyMembers().size())
                    .isPublic(studyEntity.isPublic())
                    .curricula(studyEntity.getCurricula().stream()
                            .map(curriculum -> CurriculumDto.Recruit.fromEntity(curriculum))
                            .collect(Collectors.toList()))
                    .members(studyEntity.getStudyMembers().stream()
                            .map(member -> StudyMemberDto.StudyInfo.fromEntity(member))
                            .collect(Collectors.toList()))
                    .build();
        }
    }

}
