package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.UserLikeCategoryId;
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

}
