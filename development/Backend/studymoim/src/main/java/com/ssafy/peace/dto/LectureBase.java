package com.ssafy.peace.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class LectureBase {
    
    private int lectureId;

    private String title;

    private int length;

    private String thumbnail;

    private String content;

    private String url;

    private boolean isDeleted;

}
