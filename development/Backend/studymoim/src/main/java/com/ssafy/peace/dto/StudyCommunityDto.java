package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Study;
import com.ssafy.peace.entity.StudyCommunity;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

public class StudyCommunityDto {

    @Data
    @Builder
    @Schema(name="StudyCommunityDto.Info")
    public static class Info {

        private int studyCommunityId;
        private String content;
        private LocalDateTime publishTime;
        private int studyId;
        private int userId;
        private String nickname;
        private String saveName;

        public static Info fromEntity(StudyCommunity studyCommunity) {
            return Info.builder()
                    .studyCommunityId(studyCommunity.getStudyCommunityId())
                    .content(studyCommunity.getContent())
                    .publishTime(studyCommunity.getPublishTime())
                    .studyId(StudyDto.Info.fromEntity(studyCommunity.getStudy()).getStudyId())
                    .userId(UserDto.Info.fromEntity(studyCommunity.getUser()).getUserId())
                    .nickname(UserDto.Info.fromEntity(studyCommunity.getUser()).getNickname())
                    .saveName(UserDto.Info.fromEntity(studyCommunity.getUser()).getSaveName())
                    .build();
        }
    }

    @Data
    @Builder
    @Schema(name="StudyCommunityDto.Make")
    public static class Make {

        private String content;
        private LocalDateTime publishTime;
        private int studyId;
        private int userId;
    }
}
