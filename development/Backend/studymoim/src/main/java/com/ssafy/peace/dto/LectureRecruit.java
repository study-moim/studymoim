package com.ssafy.peace.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class LectureRecruit {

    private int lectureId;

    private String title;

    private int length;

    private String thumbnail;

    private String content;

    private String url;

    private boolean isDeleted;

}
