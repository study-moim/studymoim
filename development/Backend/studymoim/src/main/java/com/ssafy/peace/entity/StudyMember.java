package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.StudyMemberId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table(name = "study_member")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@IdClass(StudyMemberId.class)
public class StudyMember {

    @Column(name = "user_id")
    @Id
    private int userId;

    @Column(name = "study_id")
    @Id
    private int studyId;

    @Column(name = "member_role")
    @NotNull
    private boolean memberRole;

    @Column(name = "is_banned")
    @NotNull
    private boolean isBanned;

}
