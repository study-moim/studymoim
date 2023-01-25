package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class StudyHistory {

    @Id
    @GeneratedValue
    private int studyHistoryId;

    @NotNull
    private int startTimeline;

    @NotNull
    private int endTimeline;

    @NotNull
    private Timestamp startTime;

    @NotNull
    private Timestamp endTime;

    @NotNull
    private int lectureId;

    @NotNull
    private int studyId;

    // TODO: 연결...
}
