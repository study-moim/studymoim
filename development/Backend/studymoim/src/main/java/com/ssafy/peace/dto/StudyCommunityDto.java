package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Study;
import com.ssafy.peace.entity.StudyCommunity;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class StudyCommunityDto {

    private int studyCommunityId;
    private String content;
    private LocalDateTime publishTime;
    private int studyId;
    private int userId;

    public static StudyCommunityDto fromEntity(StudyCommunity studyCommunity) {
        return StudyCommunityDto.builder()
                .studyCommunityId(studyCommunity.getStudyCommunityId())
                .content(studyCommunity.getContent())
                .publishTime(studyCommunity.getPublishTime())
                .studyId(StudyDto.Info.fromEntity(studyCommunity.getStudy()).getStudyId())
                .userId(UserDto.Info.fromEntity(studyCommunity.getUser()).getUserId())
                .build();
    }
}
