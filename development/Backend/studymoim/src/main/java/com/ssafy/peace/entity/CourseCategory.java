package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Table(name = "course_category")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class CourseCategory {

    @Id
    @GeneratedValue
    @Column(name = "course_category_id")
    private int courseCategoryId;

    @Column(name = "name")
    @Size(max = 10)
    @NotNull
    private String name;

    // Todo 부모 카테고리 ID 셀프조인?? 연결??
    @Column(name = "parent_category_id")
    private int parentCategoryId;

    // Todo CourseCategory Entity 연결...

}
