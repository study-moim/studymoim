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
public class FreeBoardComment {

    @Id
    @GeneratedValue
    private int freeBoardCommentId;

    @NotNull
    private String content;

    @NotNull
    private Timestamp publishTime;

    @NotNull
    private boolean isDeleted;

    // Todo 연결하기
    private int parentCommentId;
    private int freeBoardId;
}
