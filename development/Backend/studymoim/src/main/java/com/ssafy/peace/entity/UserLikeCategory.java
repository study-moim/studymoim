package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.UserLikeCategoryId;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class UserLikeCategory {

    @Id
    @GeneratedValue
    private int userLikeCategoryId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_category_id")
    private CourseCategory courseCategory;

    @Builder
    public UserLikeCategory(User user, CourseCategory courseCategory) {
        this.user = user;
        this.courseCategory = courseCategory;
    }
}
