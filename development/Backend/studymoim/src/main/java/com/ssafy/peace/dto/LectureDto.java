package com.ssafy.peace.dto;

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
