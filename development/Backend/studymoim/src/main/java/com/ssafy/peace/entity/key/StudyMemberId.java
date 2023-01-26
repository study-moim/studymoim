package com.ssafy.peace.entity.key;

import com.ssafy.peace.entity.Study;
import com.ssafy.peace.entity.User;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class StudyMemberId implements Serializable {

    private User user;
    private Study study;

}
