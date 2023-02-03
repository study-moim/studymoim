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
    @Column(columnDefinition = "TEXT")
    private String content;

    @CreationTimestamp
    private LocalDateTime publishTime;

    @ColumnDefault("false")
    private boolean isDeleted;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_board_id")
    private QuestionBoard questionBoard;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public QuestionBoardComment(String content, QuestionBoard questionBoard, User user, boolean isDeleted) {
        this.content = content;
        this.questionBoard = questionBoard;
        this.user = user;
        this.isDeleted = isDeleted;
    }

    public QuestionBoardComment updateId(Integer id) {
        this.questionBoardCommentId = id;
        return this;
    }
}
