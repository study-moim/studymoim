package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class StudyCommunity {

    @Id
    @GeneratedValue
    private int studyCommunityId;

    @NotNull
    private String content;

    @CreationTimestamp
    private LocalDateTime publishTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_id")
    private Study study;

    @Builder
    public StudyCommunity(String content, User user, Study study) {
        this.content = content;
        this.user = user;
        this.study = study;
    }
}
