package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.CurriculumId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table(name = "curriculum")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@IdClass(CurriculumId.class)
public class Curriculum {
    @Column(name = "order")
    @NotNull
    private int order;

    @Column(name = "study_id")
    @Id
    private int studyId;

    @Column(name = "course_id")
    @Id
    private int courseId;

    // Todo Curriculum Entity 연결...
}
