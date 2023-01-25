package com.ssafy.peace.entity;

import java.sql.Timestamp;

public class QuestionBoardComment {
    private int questionBoardCommentId;
    private String content;
    private Timestamp publishTime;
    private boolean isDeleted;
    private int parentCommentId;
    private int questionBoardId;
}
