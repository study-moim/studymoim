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
import java.util.ArrayList;
import java.util.List;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class FreeBoard {

    @Id
    @GeneratedValue
    private int freeBoardId;

    @Size(max = 20)
    @NotNull
    private String title;

    @NotNull
    private String content;

    @CreationTimestamp
    private LocalDateTime publishTime;

    @ColumnDefault("false")
    private boolean isDeleted;

    @ColumnDefault("0")
    private int hit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "freeBoard")
    private List<FreeBoardComment> freeBoardComments = new ArrayList<>();

    @Builder
    public FreeBoard(String title, String content, User user, boolean isDeleted, int hit) {
        this.title = title;
        this.content = content;
        this.user = user;
        this.isDeleted = isDeleted;
        this.hit = hit;
    }
}
