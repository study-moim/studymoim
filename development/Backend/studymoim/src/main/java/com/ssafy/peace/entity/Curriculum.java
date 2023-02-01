package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.CurriculumId;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Curriculum {

    @Id
    @GeneratedValue
    private int curriculumId;
    
    @NotNull
    private int curriculumOrder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_id")
    private Study study;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    @Builder
    public Curriculum(Study study, Course course, int curriculumOrder) {
        this.study = study;
        this.course = course;
        this.curriculumOrder = curriculumOrder;
    }

}
