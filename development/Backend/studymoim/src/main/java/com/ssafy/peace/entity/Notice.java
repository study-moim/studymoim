package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Table(name = "notice")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Notice {

    @Id
    @GeneratedValue
    @Column(name = "notice_id")
    private int noticeId;

    @Column(name = "title")
    @Size(max = 30)
    @NotNull
    private String title;

    @Column(name = "content")
    @NotNull
    private String content;

    @Column(name = "publish_time")
    private Timestamp publishTime;

    // Todo 연결
    private int userId;
}
