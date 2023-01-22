package com.ssafy.peace.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Entity
@Table(name = "FREE_BOARD")
@Getter
@NoArgsConstructor
public class FreeBoard {

    @Id
    @GeneratedValue
    @Column(name = "free_board_id")
    private int freeBoardId;

    @Column(name = "title")
    @Size(max = 20)
    @NotNull
    private String title;

    @Column(name = "content")
    @NotNull
    private String content;

    @Column(name = "publish_time")
    @NotNull
    private Timestamp publishTime;

    @Column(name = "is_deleted")
    @NotNull
    private boolean isDeleted;

    @Column(name = "hit")
    @NotNull
    private int hit;

    // Todo userId 연결
    private int userId;
}
