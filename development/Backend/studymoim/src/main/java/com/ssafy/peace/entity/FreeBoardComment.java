package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Table(name = "free_board_comment")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class FreeBoardComment {

    @Id
    @GeneratedValue
    @Column(name = "free_board_comment_id")
    private int freeBoardCommentId;

    @Column(name = "content")
    @NotNull
    private String content;

    @Column(name = "publish_time")
    @NotNull
    private Timestamp publishTime;

    @Column(name = "is_deleted")
    @NotNull
    private boolean isDeleted;

    // Todo 연결하기
    private int parentCommentId;
    private int freeBoardId;
}
