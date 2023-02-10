package com.ssafy.peace.dto;

import com.ssafy.peace.entity.StudyHistory;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

public class StudyHistoryDto {

    @Data
    @Builder
    public static class Info {
        private int studyId;
        private LectureDto.Info lecture;
        private int startTimeline;
        private int endTimeline;
        private LocalDateTime startTime;
        private LocalDateTime endTime;
        public static Info fromEntity(StudyHistory studyHistoryEntity){
            return Info.builder()
                    .studyId(studyHistoryEntity.getStudy().getStudyId())
                    .lecture(LectureDto.Info.fromEntity(studyHistoryEntity.getLecture()))
                    .startTimeline(studyHistoryEntity.getStartTimeline())
                    .endTimeline(studyHistoryEntity.getEndTimeline())
                    .startTime(studyHistoryEntity.getStartTime())
                    .endTime(studyHistoryEntity.getEndTime())
                    .build();

        }


    }
}
