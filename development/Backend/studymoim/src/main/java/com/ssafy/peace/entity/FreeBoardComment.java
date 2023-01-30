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

    // 부모 정의
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_comment_id")
    private FreeBoardComment parentComment;

    // 자식 정의
    @OneToMany(mappedBy = "parentComment")
    private List<FreeBoardComment> children;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "free_board_id")
    private FreeBoard freeBoard;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public FreeBoardComment(String content, FreeBoardComment parentComment, FreeBoard freeBoard, User user, boolean isDeleted) {
        this.content = content;
        this.parentComment = parentComment;
        this.freeBoard = freeBoard;
        this.user = user;
        this.isDeleted = isDeleted;
    }
}
