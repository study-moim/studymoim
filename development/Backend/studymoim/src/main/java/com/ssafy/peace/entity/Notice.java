package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Notice {

    @Id
    @GeneratedValue
    private int noticeId;

    @Size(max = 30)
    @NotNull
    private String title;

    @NotNull
    private String content;

    private Timestamp publishTime;

    // Todo 연결
    private int userId;
}
