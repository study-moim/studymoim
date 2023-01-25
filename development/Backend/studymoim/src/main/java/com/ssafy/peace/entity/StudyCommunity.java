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
public class StudyCommunity {

    @Id
    @GeneratedValue
    private int studyCommunityId;

    @NotNull
    private String content;

    @NotNull
    private Timestamp publishTime;

    @NotNull
    private boolean isDeleted;

    @NotNull
    private int userId;

    @NotNull
    private int studyId;

    // TODO: 연결...
}
