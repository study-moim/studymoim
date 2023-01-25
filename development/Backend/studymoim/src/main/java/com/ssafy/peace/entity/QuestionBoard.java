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
public class QuestionBoard {

    @Id
    @GeneratedValue
    private int questionBoardId;

    @Size(max = 20)
    @NotNull
    private String title;

    @NotNull
    private String content;

    @NotNull
    private int questionTime;

    @NotNull
    private boolean isDeleted;

    @NotNull
    private int hit;

    @NotNull
    private boolean isPublic;

    @NotNull
    private Timestamp publishTime;

    @NotNull
    private int courseId;

    @NotNull
    private int userId;

    private int studyId;

    // TODO: 연결...
}
