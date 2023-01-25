package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@DynamicInsert
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

    @CreationTimestamp
    private LocalDateTime publishTime;

    @ColumnDefault("false")
    private boolean isDeleted;

    // 부모 정의
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_comment_id")
    private QuestionBoardComment parentComment;

    // 자식 정의
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "parentComment")
    private List<QuestionBoardComment> children;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_board_id")
    private QuestionBoard questionBoard;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

}
