package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.UserLikeCategoryId;
import lombok.*;

import javax.persistence.*;

@Table(name = "user_like_category")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
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
