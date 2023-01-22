package com.ssafy.peace.dto;

import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Data
public class CourseRecruit {

    private int course_id;

    private String title;

    private String content;

    private Timestamp lastUpdateDate;

    private boolean isDeleted;

    private List<LectureRecruit> lectures;

    private int providerId;

    private String providerUrl;

    private int providerPlatformId;

    private String providerPlatformName;

    private int providerChannelId;

    private String providerChannelName;

}
