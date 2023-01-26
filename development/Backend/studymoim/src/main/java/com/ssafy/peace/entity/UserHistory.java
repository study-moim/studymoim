package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class UserHistory {

    // Todo 컬럼
    @Id
    @GeneratedValue
    private int userHistoryId;

    @NotNull
    private int startTimeline;

    private int endTimeline;

    @NotNull
    private int startTime;

    private int endTime;

    @NotNull
    private int lectureId;

    @NotNull
    private int userId;

    // Todo 연결...
}

