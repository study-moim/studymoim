package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Table(name = "question_board_comment")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class QuestionBoardComment {

    @Id
    @GeneratedValue
    @Column(name = "question_board_comment_id")
    private int questionBoardCommentId;

    @Column(name = "content")
    @NotNull
    private String content;

    @Column(name = "publish_time")
    @NotNull
    private Timestamp publishTime;

    @Column(name = "is_deleted")
    @NotNull
    private boolean isDeleted;

    @Column(name = "parent_comment_id")
    private int parentCommentId;

    @Column(name = "question_board_id")
    @NotNull
    private int questionBoardId;

    // TODO: 연결...
}
