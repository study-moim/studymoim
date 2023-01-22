package com.ssafy.peace.dto;


import lombok.Data;

import java.util.List;

@Data
public class CurriculumRecruit {

    private int order;

    private List<CourseRecruit> courses;

}
