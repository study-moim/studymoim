package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table(name = "study_member", uniqueConstraints = {
                @UniqueConstraint(
                        name = "PK_STUDY_MEMBER",
                        columnNames = {"user_id", "study_id"}
                )
        })
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class StudyMember {

    @Column(name = "user_id")
    private int userId;

    @Column(name = "study_id")
    private int studyId;

    @Column(name = "member_role")
    @NotNull
    private boolean memberRole;

    @Column(name = "is_banned")
    @NotNull
    private boolean isBanned;

}
