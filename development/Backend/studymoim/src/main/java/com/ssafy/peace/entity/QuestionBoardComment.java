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
public class QuestionBoardComment {

    @Id
    @GeneratedValue
    private int questionBoardCommentId;

    @NotNull
    private String content;

    @NotNull
    private Timestamp publishTime;

    @NotNull
    private boolean isDeleted;

    private int parentCommentId;

    @NotNull
    private int questionBoardId;

    // TODO: 연결...
}
