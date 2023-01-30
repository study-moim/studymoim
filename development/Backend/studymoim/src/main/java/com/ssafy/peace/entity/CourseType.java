package com.ssafy.peace.entity;


import lombok.*;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class CourseType {

    @Id
    @GeneratedValue
    private int courseTypeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_category_id")
    private CourseCategory courseCategory;

    @Builder
    public CourseType(Course course, CourseCategory courseCategory) {
        this.course = course;
        this.courseCategory = courseCategory;
    }
}
