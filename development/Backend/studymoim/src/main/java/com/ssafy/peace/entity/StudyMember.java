package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.StudyMemberId;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@IdClass(StudyMemberId.class)
public class StudyMember {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_id")
    private Study study;

    @NotNull
    private boolean memberRole;

    @ColumnDefault("false")
    private boolean isBanned;

    @Builder
    public StudyMember(User user, Study study, boolean memberRole, boolean isBanned) {
        this.user = user;
        this.study = study;
        this.memberRole = memberRole;
        this.isBanned = isBanned;
    }
}
