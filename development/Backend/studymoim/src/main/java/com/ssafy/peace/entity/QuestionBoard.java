package com.ssafy.peace.entity;

import java.sql.Timestamp;

public class QuestionBoard {
    private int questionBoardId;
    private String title;
    private String content;
    private int questionTime;
    private boolean isDeleted;
    private int hit;
    private boolean isPublic;
    private Timestamp publishTime;
    private int courseId;
    private int userId;
    private int studyId;
}
