package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Lecture;
import lombok.Builder;
import lombok.Data;

public class LectureDto {

    @Data
    @Builder
    public static class Info {
        private int lectureId;
        private String title;
        private int length;
        private String thumbnail;
        private String content;
        private String url;
        public static Info fromEntity(Lecture lecture) {
            return Info.builder()
                    .lectureId(lecture.getLectureId())
                    .title(lecture.getTitle())
                    .length(builder().length)
                    .thumbnail(lecture.getThumbnail())
                    .content(lecture.getContent())
                    .url(builder().url)
                    .build();
        }
    }

    @Data
    @Builder
    public static class Recruit {
        private int lectureId;
        private String title;
        private int length;
        private String thumbnail;
        private String content;
        private String url;
        private boolean isDeleted;
    }

}
