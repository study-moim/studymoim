package com.ssafy.peace.dto;

import com.ssafy.peace.entity.StudyRequest;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class StudyRequestDto {

    @Data
    @Builder
    public static class Info {
        private int requestId;
        private UserDto.Info user;
        private String content;
        private LocalDateTime requestTime;
        private int requestStatus;
        private StudyDto.Info study;

        public static Info fromEntity(StudyRequest studyRequestEntity){
            return Info.builder()
                    .requestId(studyRequestEntity.getStudyRequestId())
                    .content(studyRequestEntity.getContent())
                    .requestTime(studyRequestEntity.getRequestTime())
                    .requestStatus(studyRequestEntity.getRequestStatus())
                    .user(UserDto.Info.fromEntity(studyRequestEntity.getUser()))
                    .study(StudyDto.Info.fromEntity(studyRequestEntity.getStudy()))
                    .build();
        }
    }

    @Data
    @Builder
    public static class Request {

        @Size(max = 255)
        @NotNull(message="content은 null 일 수 없습니다")
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        private String content;
        private int userId;
    }

    @Data
    @Builder
    public static class Decide {
        private int userId;
        private int requestStatus;
    }
}
