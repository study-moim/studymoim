package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Table(name = "study")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Study {

    @Id
    @GeneratedValue
    @Column(name = "study_id")
    private int studyId;

    @Column(name = "creation_time")
    @NotNull
    private Timestamp creationTime;

    @Column(name = "title")
    @Size(max = 30)
    @NotNull
    private String title;

    @Column(name = "content")
    @NotNull
    private String content;

    @Column(name = "save_name")
    @Size(max = 255)
    private String saveName;

    @Column(name = "is_open")
    @NotNull
    private boolean isOpen;

    @Column(name = "user_limit")
    @NotNull
    private int userLimit;

    @Column(name = "is_public")
    @NotNull
    private boolean isPublic;

    @Column(name = "notice")
    @Size(max = 100)
    private String notice;

    @Column(name = "is_finished")
    @NotNull
    private boolean isFinished;

    // TODO: 연결...
}
