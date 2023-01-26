package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

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

    // Todo 부모 카테고리 ID 셀프조인?? 연결??
    private int parentCategoryId;

    // Todo CourseCategory Entity 연결...

}
