package com.ssafy.peace.dto;

import lombok.Data;

import java.sql.Timestamp;

/**
 * study/nowplay 페이지에서 필요한 데이터
 * StudyNowPlay는 하나의 강의 상세 정보와 강의가 포함된 강좌 상세정보를 포함한다.
 */
@Data
public class StudyNowPlay {

    private int studyId;

    private int course_id;

    private String title;

    private String content;

    private Timestamp lastUpdateDate;

    private boolean isDeleted;

    private int providerId;

    private String providerUrl;

    private int providerPlatformId;

    private String providerPlatformName;

    private int providerChannelId;

    private String providerChannelName;

    // 여기서부터 강의 정보
    // 지금 재생중인 강의 한개
    // Service단에서 StudyHistory를 통해 현재 재생중인 강의를 찾아낸다.
    private LectureBase lecture;

}
