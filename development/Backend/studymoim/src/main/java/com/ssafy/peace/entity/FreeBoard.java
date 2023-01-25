package com.ssafy.peace.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Entity
@Getter
@NoArgsConstructor
public class FreeBoard {

    @Id
    @GeneratedValue
    private int freeBoardId;

    @Size(max = 20)
    @NotNull
    private String title;

    @NotNull
    private String content;

    @NotNull
    private Timestamp publishTime;

    @NotNull
    private boolean isDeleted;

    @NotNull
    private int hit;

    // Todo userId 연결
    private int userId;
}
