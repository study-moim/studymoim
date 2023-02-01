package com.ssafy.peace.dto;

import com.ssafy.peace.entity.StudyHistory;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

public class StudyHistoryDto {

    @Data
    @Builder
    public static class Info {
        private StudyDto.Info study;
        private LectureDto.Info lecture;
        private int startTimeline;
        private int endTimeline;
        private LocalDateTime startTime;
        private LocalDateTime endTime;
        public static Info fromEntity(StudyHistory studyHistoryEntity){
            return Info.builder()
                    .study(StudyDto.Info.fromEntity(studyHistoryEntity.getStudy()))
                    .lecture(LectureDto.Info.fromEntity(studyHistoryEntity.getLecture()))
                    .startTimeline(studyHistoryEntity.getStartTimeline())
                    .endTimeline(studyHistoryEntity.getEndTimeline())
                    .startTime(studyHistoryEntity.getStartTime())
                    .endTime(studyHistoryEntity.getEndTime())
                    .build();

        }


    }
}
