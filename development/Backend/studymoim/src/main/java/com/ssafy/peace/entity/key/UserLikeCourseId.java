package com.ssafy.peace.entity.key;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class UserLikeCourseId implements Serializable {

    @Column(name = "user_id")
    private int userId;
    @Column(name = "course_id")
    private int courseId;

}
