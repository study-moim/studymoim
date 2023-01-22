package com.ssafy.peace.dto;

import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

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

    private List<UserBase> members;

    private List<CurriculumRecruit> curriculums;

    private Timestamp startTime;

    private Timestamp endTime;

}
