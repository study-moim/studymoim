package com.ssafy.peace.entity;

import lombok.*;
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
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

    @Builder
    public QuestionBoardComment(String content, QuestionBoardComment parentComment, QuestionBoard questionBoard, User user, boolean isDeleted) {
        this.content = content;
        this.parentComment = parentComment;
        this.questionBoard = questionBoard;
        this.user = user;
        this.isDeleted = isDeleted;
    }
}
