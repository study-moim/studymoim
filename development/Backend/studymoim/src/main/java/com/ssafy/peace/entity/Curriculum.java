package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.CurriculumId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@IdClass(CurriculumId.class)
public class Curriculum {
    
    @NotNull
    private int order;

    @Id
    private int studyId;

    @Id
    private int courseId;

    // Todo Curriculum Entity 연결...
}
