package com.ssafy.peace.dto;


import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

/**
 * study make 페이지에서 필요한 커리큘럼 데이터
 * CurriculumMake는 하나의 Course와 하나의 order를 가진다.
 */
@Data
@Builder
public class CurriculumMake {

    @NotNull(message="order은 null 일 수 없습니다")
    private int order;

    @NotNull(message="courseId은 null 일 수 없습니다")
    private int courseId;

}
