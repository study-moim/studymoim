package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Table(name = "curriculum")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Curriculum {
    @Column(name = "order")
    @NotNull
    private int order;

    // Todo studyId, courseId 연결
    private int studyId;
    private int courseId;

    // Todo Curriculum Entity 연결...
}
