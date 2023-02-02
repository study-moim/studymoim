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
public class StudyMember {

    @Id
    @GeneratedValue
    private int studyMemberId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

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

    public StudyMember updateId(Integer id){
        this.studyMemberId = id;
        return this;
    }

    public boolean checkBanned(){
        if (this.isBanned == true) return true;
        else return false;
    }
}
