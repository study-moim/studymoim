package com.ssafy.peace.dto;

import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

/**
 * study/recruit 페이지에서 필요한 스터디 하나의 데이터
 * StudyRecruit의 목록 형태가 study/recruit 페이지를 이룬다.
 */
@Data
public class StudyRecruit {

    private int studyId;

    private Timestamp creationTime;

    private String title;

    private String content;

    private String saveName;

    private boolean isOpen;

    private int userLimit;

    private boolean isPublic;

    private String notice;

    private boolean isFinished;

    private List<UserInfo> members;

    private List<CurriculumRecruit> curriculum;

    private Timestamp startTime;

    private Timestamp endTime;

}
