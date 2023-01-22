package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table(name = "user_history")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class UserHistory {

    // Todo 컬럼
    @Id
    @GeneratedValue
    @Column(name = "user_history_id")
    private int userHistoryId;

    @Column(name = "start_timeline")
    @NotNull
    private int startTimeline;

    @Column(name = "end_timeline")
    private int endTimeline;

    @Column(name = "start_time")
    @NotNull
    private int startTime;

    @Column(name = "end_time")
    private int endTime;

    @Column(name = "lecture_id")
    @NotNull
    private int lectureId;

    @Column(name = "user_id")
    @NotNull
    private int userId;

    // Todo 연결...
}

