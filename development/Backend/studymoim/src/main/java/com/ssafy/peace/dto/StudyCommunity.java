package com.ssafy.peace.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class StudyCommunity {

    private int studyId;

    private int studyCommunityId;

    private String content;

    private Timestamp publishTime;

    private boolean isDeleted;

    private UserInfo user;

}
