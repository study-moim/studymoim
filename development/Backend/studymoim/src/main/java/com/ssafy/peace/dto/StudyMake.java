package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Study 생성 시 인바운드 데이터
 * Validation 적용 필수
 */
@Data
@Builder
public class StudyMake {

    @Size(min=5, max=30, message = "바르지 않은 title 크기 입니다")
    @NotNull(message="title은 null 일 수 없습니다")
    @NotEmpty(message="title은 빈값 일 수 없습니다")
    private String title;

    @NotNull(message="content은 null 일 수 없습니다")
    @NotEmpty(message="content은 빈값 일 수 없습니다")
    private String content;

    @Size(max = 255)
    private String saveName;

    @Max(value = 6, message = "userLimit은 7명 이상일 수 없습니다.")
    @NotNull(message="userLimit은 null 일 수 없습니다")
    private int userLimit;

    @NotNull(message="isPublic은 null 일 수 없습니다")
    private boolean isPublic;

    @Size(max = 100, message = "바르지 않은 notice 크기 입니다")
    private String notice;

    @NotNull(message="curriculum은 null 일 수 없습니다")
    private CurriculumMake curriculum;

}
