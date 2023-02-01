package com.ssafy.peace.entity;


import com.ssafy.peace.entity.key.UserLikeCategoryId;
import com.ssafy.peace.entity.key.UserLikeCourseId;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class UserLikeCourse {

    @Id
    @GeneratedValue
    private int userLikeCourseId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    @Builder
    public UserLikeCourse(User user, Course course) {
        this.user = user;
        this.course = course;
    }
}
