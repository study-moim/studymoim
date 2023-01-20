package com.ssafy.peace.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "course_type")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class CourseType {

    @Id
    @GeneratedValue
    @Column(name = "course_type_id")
    private int courseTypeId;

    // Todo courseId 연결
    private int courseId;

    // Todo courseCategoryId 연결
    private int courseCategoryId;

    // Todo CourseType Entity 연결...
}
