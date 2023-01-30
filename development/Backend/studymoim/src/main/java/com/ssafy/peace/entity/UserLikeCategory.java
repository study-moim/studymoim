package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.UserLikeCategoryId;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@IdClass(UserLikeCategoryId.class)
public class UserLikeCategory {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_category_id")
    private CourseCategory courseCategory;

    @Builder
    public UserLikeCategory(User user, CourseCategory courseCategory) {
        this.user = user;
        this.courseCategory = courseCategory;
    }
}
