package com.ssafy.peace.entity;


import com.ssafy.peace.entity.key.UserLikeCategoryId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "User_like_course")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@IdClass(UserLikeCategoryId.class)
public class UserLikeCourse {

    @Id
    @Column(name = "user_id")
    private int userId;

    @Id
    @Column(name = "course_id")
    private int courseId;

}
