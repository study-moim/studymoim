package com.ssafy.peace.entity;

import java.sql.Timestamp;

public class FreeBoardComment {
    private int freeBoardCommentId;
    private String content;
    private Timestamp publishTime;
    private boolean isDeleted;
    private int parentCommentId;
    private int freeBoardId;
}
