package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.UserLikeCategoryId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "user_like_category")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@IdClass(UserLikeCategoryId.class)
public class UserLikeCategory {

    @Id
    @Column(name = "user_id")
    private int userId;

    @Id
    @Column(name = "course_category_id")
    private int courseCategoryId;

}
