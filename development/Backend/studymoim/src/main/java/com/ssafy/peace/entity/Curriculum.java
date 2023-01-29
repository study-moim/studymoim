package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.CurriculumId;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@IdClass(CurriculumId.class)
public class Curriculum {
    
    @NotNull
    private int order;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_id")
    private Study study;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    @Builder
    public Curriculum(Study study, Course course) {
        this.study = study;
        this.course = course;
    }
}
