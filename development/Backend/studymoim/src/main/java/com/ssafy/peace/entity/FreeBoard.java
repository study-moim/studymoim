package com.ssafy.peace.entity;

import java.sql.Timestamp;

public class FreeBoard {
    private int freeBoardId;
    private String title;
    private String content;
    private Timestamp publishTime;
    private boolean isDeleted;
    private int hit;
    private int userId;
}
