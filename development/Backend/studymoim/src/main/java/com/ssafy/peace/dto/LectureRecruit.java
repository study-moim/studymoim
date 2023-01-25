package com.ssafy.peace.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * study/recruit 페이지에서 필요한 강의 데이터
 * LectureRecruit는 하나의 Lecture와 channel, platform의 ID와 이름을 가진다.
 */
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
