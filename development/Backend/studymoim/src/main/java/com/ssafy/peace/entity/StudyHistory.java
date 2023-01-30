package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class StudyHistory {

    @Id
    @GeneratedValue
    private int studyHistoryId;

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
    @JoinColumn(name = "study_id")
    private Study study;

    // 추후에 사용법에 따라 수정 필요할듯
    @Builder
    public StudyHistory(int startTimeline, int endTimeline, Lecture lecture, Study study) {
        this.startTimeline = startTimeline;
        this.endTimeline = endTimeline;
        this.lecture = lecture;
        this.study = study;
    }
}
