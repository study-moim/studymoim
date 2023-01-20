package com.ssafy.peace.entity.key;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@AllArgsConstructor
@EqualsAndHashCode
public class UserLikeCategoryId implements Serializable {

    private int userId;
    private int courseCategoryId;

}
