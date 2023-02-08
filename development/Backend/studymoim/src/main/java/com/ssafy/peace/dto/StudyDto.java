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
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class StudyDto {

    @Data
    @Builder
    public static class Info {
        private int studyId;
        private UserDto.Info leadUser;
        private String title;
        private String content;
        private LocalDate startTime;
        private String saveName;
        private boolean isClose;
        private int userLimit;
        private Long userGathered; // 모인 사람 수
        private boolean isPublic;
        private String notice;
        private boolean isFinished;
        private List<CurriculumDto.Recruit> curricula;

        public static Info fromEntity(Study studyEntity) {
            return Info.builder()
                    .studyId(studyEntity.getStudyId())
                    .leadUser(UserDto.Info.fromEntity(studyEntity.getStudyMembers().stream()
                            .filter(studyMember -> studyMember.isMemberRole())
                            .findFirst().get().getUser()))
                    .title(studyEntity.getTitle())
                    .content(studyEntity.getContent())
                    .startTime(studyEntity.getStartTime())
                    .saveName(studyEntity.getSaveName())
                    .isClose(studyEntity.isClose())
                    .userLimit(studyEntity.getUserLimit())
                    .userGathered(studyEntity.getStudyMembers().stream()
                            .filter(member -> !member.isBanned()).count())
                    .isPublic(studyEntity.isPublic())
                    .notice(studyEntity.getNotice())
                    .isFinished(studyEntity.isFinished())
                    .curricula(studyEntity.getCurricula().stream()
                            .map(curriculum -> CurriculumDto.Recruit.fromEntity(curriculum))
                            .collect(Collectors.toList()))
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
        @NotEmpty(message="startTime은 빈값 일 수 없습니다")
        private LocalDate startTime;
        @Size(max = 255)
        private String saveName;
        @Max(value = 6, message = "userLimit은 7명 이상일 수 없습니다.")
        @NotNull(message="userLimit은 null 일 수 없습니다")
        private int userLimit;
        @NotNull(message="isPublic은 null 일 수 없습니다")
        private boolean isPublic;
        @NotNull(message="강좌 선택은 null 일 수 없습니다")
        private List<Integer> courseIdList;
        private int leadUserId; // 스터디 생성자 아이디
    }



    @Data
    @Builder
    public static class Notice{
        @Size(max = 100, message = "바르지 않은 notice 크기 입니다")
        private String notice;
        private int studyId;
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
        private UserDto.Info leadUser;
        private String title;
        private String content;
        private LocalDate startTime;
        private String saveName;
        private boolean isClose;
        private int userLimit;
        private Long userGathered; // 모인 사람 수
        private boolean isPublic;
        private String notice;
        private boolean isFinished;
        private List<UserDto.Info> members;
        private List<CurriculumDto.Recruit> curricula;
        public static Detail fromEntity(Study studyEntity) {
            return Detail.builder()
                    .studyId(studyEntity.getStudyId())
                    .leadUser(UserDto.Info.fromEntity(studyEntity.getStudyMembers().stream()
                            .filter(studyMember -> studyMember.isMemberRole())
                            .findFirst().get().getUser()))
                    .title(studyEntity.getTitle())
                    .content(studyEntity.getContent())
                    .startTime(studyEntity.getStartTime())
                    .saveName(studyEntity.getSaveName())
                    .isClose(studyEntity.isClose())
                    .userLimit(studyEntity.getUserLimit())
                    .userGathered(studyEntity.getStudyMembers().stream()
                            .filter(member -> !member.isBanned()).count())
                    .isPublic(studyEntity.isPublic())
                    .notice(studyEntity.getNotice())
                    .isFinished(studyEntity.isFinished())
                    .curricula(studyEntity.getCurricula().stream()
                            .map(curriculum -> CurriculumDto.Recruit.fromEntity(curriculum))
                            .collect(Collectors.toList()))
                    .members(studyEntity.getStudyMembers().stream()
                            .filter(member -> !member.isBanned() & !member.isMemberRole())
                            .map(member->UserDto.Info.fromEntity(member.getUser()))
                            .collect(Collectors.toList()))
                    .build();
        }
    }

}
