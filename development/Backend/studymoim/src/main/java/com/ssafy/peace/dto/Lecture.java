package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.List;

public class Lecture {

    @Data
    @Builder
    public static class Info {
        private int lectureId;
        private String title;
        private int length;
        private String thumbnail;
        private String content;
        private String url;
        private boolean isDeleted;
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
