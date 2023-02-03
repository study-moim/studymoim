package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class FreeBoardComment {

    @Id
    @GeneratedValue
    private int freeBoardCommentId;

    @NotNull
    @Column(columnDefinition = "TEXT")
    private String content;

    @CreationTimestamp
    private LocalDateTime publishTime;

    @ColumnDefault("false")
    private boolean isDeleted;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "free_board_id")
    private FreeBoard freeBoard;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public FreeBoardComment(String content, FreeBoard freeBoard, User user, boolean isDeleted) {
        this.content = content;
        this.freeBoard = freeBoard;
        this.user = user;
        this.isDeleted = isDeleted;
    }

    public FreeBoardComment updateId(Integer id) {
        this.freeBoardCommentId = id;
        return this;
    }
}
