package com.ssafy.peace.entity;


import com.ssafy.peace.entity.key.UserLikeCategoryId;
import com.ssafy.peace.entity.key.UserLikeCourseId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@IdClass(UserLikeCourseId.class)
public class UserLikeCourse {

    @Id
    private int userId;

    @Id
    private int courseId;

}
