package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

public class Course {

    @Data
    @Builder
    public static class Info {
        private int course_id;
        private String title;
        private String content;
        private Timestamp lastUpdateDate;
        private List<Lecture.Info> lectures;
        private String providerUrl;
        private String providerPlatformName;
        private String providerChannelName;
    }

    @Data
    @Builder
    public static class Recruit {
        private int course_id;
        private String title;
        private String content;
        private Timestamp lastUpdateDate;
        private List<Lecture.Recruit> lectures;
        private int providerId;
        private String providerUrl;
        private int providerPlatformId;
        private String providerPlatformName;
        private int providerChannelId;
        private String providerChannelName;

    }

}
