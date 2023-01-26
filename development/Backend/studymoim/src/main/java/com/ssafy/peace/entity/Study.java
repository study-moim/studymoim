package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Study {

    @Id
    @GeneratedValue
    private int studyId;

    @NotNull
    private Timestamp creationTime;

    @Size(max = 30)
    @NotNull
    private String title;

    @NotNull
    private String content;

    @Size(max = 255)
    private String saveName;

    @NotNull
    private boolean isOpen;

    @NotNull
    private int userLimit;

    @NotNull
    private boolean isPublic;

    @Size(max = 100)
    private String notice;

    @NotNull
    private boolean isFinished;

    // TODO: 연결...
}
