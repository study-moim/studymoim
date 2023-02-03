package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class StudyRequest {

    @Id
    @GeneratedValue
    private int studyRequestId;

    @Size(max = 255)
    @NotNull
    private String content;

    @CreationTimestamp
    private LocalDateTime requestTime;

    @ColumnDefault("0")
    private int requestStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_id")
    private Study study;

    @Builder
    public StudyRequest(String content, int requestStatus, User user, Study study) {
        this.content = content;
        this.requestStatus = requestStatus;
        this.user = user;
        this.study = study;
    }

    public StudyRequest updateId(Integer id){
        this.studyRequestId = id;
        return this;
    }
}
