package com.ssafy.peace.dto;

import com.ssafy.peace.entity.StudyHistory;
import lombok.Builder;
import lombok.Data;

import java.util.Map;

public class HistoryDto {

    @Data
    @Builder
    public static class Study {
        private CourseDto.Info course;
        private Long studyProgressCount;
        private Map<String, Long> userProgressCount;
        public static HistoryDto.Study fromEntity(CourseDto.Info course, Long studyProgressCount, Map<String, Long> userProgressCount) {
            return HistoryDto.Study.builder()
                    .course(course)
                    .studyProgressCount(studyProgressCount)
                    .userProgressCount(userProgressCount)
                    .build();
        }
    }

}
