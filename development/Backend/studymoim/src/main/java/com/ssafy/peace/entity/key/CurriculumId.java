package com.ssafy.peace.entity.key;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@AllArgsConstructor
@EqualsAndHashCode
public class CurriculumId implements Serializable {

    private int studyId;

    private int courseId;
}
