package com.ssafy.peace.entity.key;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

@AllArgsConstructor
@EqualsAndHashCode
public class StudyMemberId implements Serializable {

    private int userId;
    private int studyId;

}
