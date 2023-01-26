package com.ssafy.peace.entity.key;

import com.ssafy.peace.entity.Course;
import com.ssafy.peace.entity.Study;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class CurriculumId implements Serializable {

    private Study study;

    private Course course;
}
