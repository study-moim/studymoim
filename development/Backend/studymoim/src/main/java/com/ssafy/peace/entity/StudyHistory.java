package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Table(name = "study_history")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class StudyHistory {

    @Id
    @GeneratedValue
    @Column(name = "study_history_id")
    private int studyHistoryId;

    @Column(name = "start_timeline")
    @NotNull
    private int startTimeline;

    @Column(name = "end_timeline")
    @NotNull
    private int endTimeline;

    @Column(name = "start_time")
    @NotNull
    private Timestamp startTime;

    @Column(name = "end_time")
    @NotNull
    private Timestamp endTime;

    @Column(name = "lecture_id")
    @NotNull
    private int lectureId;

    @Column(name = "study_id")
    @NotNull
    private int studyId;

    // TODO: 연결...
}
