package com.ssafy.peace.entity;


import com.ssafy.peace.entity.key.UserLikeCategoryId;
import com.ssafy.peace.entity.key.UserLikeCourseId;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@IdClass(UserLikeCourseId.class)
public class UserLikeCourse {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    @Builder
    public UserLikeCourse(User user, Course course) {
        this.user = user;
        this.course = course;
    }
}
