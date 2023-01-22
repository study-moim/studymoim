package com.ssafy.peace.dto;


import lombok.Data;

import java.util.List;

/**
 * study recruit 페이지에서 필요한 커리큘럼 데이터
 * CurriculumRecruit는 하나의 Course와 하나의 order를 가진다.
 */
@Data
public class CurriculumRecruit {

    private int order;

    private CourseRecruit course;

}
