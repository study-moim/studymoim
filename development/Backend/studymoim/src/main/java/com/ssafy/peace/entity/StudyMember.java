package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.StudyMemberId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@IdClass(StudyMemberId.class)
public class StudyMember {

    @Id
    private int userId;

    @Id
    private int studyId;

    @NotNull
    private boolean memberRole;

    @NotNull
    private boolean isBanned;

}
