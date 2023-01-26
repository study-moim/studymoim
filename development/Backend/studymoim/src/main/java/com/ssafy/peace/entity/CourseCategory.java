package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class CourseCategory {

    @Id
    @GeneratedValue
    private int courseCategoryId;

    @Size(max = 10)
    @NotNull
    private String name;

    // 부모 정의
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_category_id")
    private CourseCategory parentCategory;

    // 자식 정의
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "parentCategory")
    private List<CourseCategory> children;

    @OneToMany(mappedBy = "courseCategory")
    private List<CourseType> courseTypes = new ArrayList<>();

    @OneToMany(mappedBy = "courseCategory")
    private List<UserLikeCategory> userLikeCategories = new ArrayList<>();
}
