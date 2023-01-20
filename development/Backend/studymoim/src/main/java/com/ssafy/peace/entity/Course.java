package com.ssafy.peace.entity;

import java.sql.Timestamp;

public class Course {

    private int course_id;

    private String title;
    private String content;
    private Timestamp lastUpdateDate;
    private boolean isDeleted;
    private int courseProviderId;

}
