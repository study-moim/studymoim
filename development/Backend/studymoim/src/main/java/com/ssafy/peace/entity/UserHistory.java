package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class UserHistory {

    // Todo 컬럼
    @Id
    @GeneratedValue
    private int userHistoryId;

    @ColumnDefault("0")
    private int startTimeline;

    private int endTimeline;

    @CreationTimestamp
    private LocalDateTime startTime;

    @UpdateTimestamp
    private LocalDateTime endTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public UserHistory(int startTimeline, int endTimeline, Lecture lecture, User user) {
        this.startTimeline = startTimeline;
        this.endTimeline = endTimeline;
        this.lecture = lecture;
        this.user = user;
    }
}

