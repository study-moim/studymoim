package com.ssafy.peace.entity.key;

import com.ssafy.peace.entity.CourseCategory;
import com.ssafy.peace.entity.User;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class UserLikeCategoryId implements Serializable {

    private User user;
    private CourseCategory courseCategory;

}
