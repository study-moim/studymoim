package com.ssafy.peace.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Notice {
    
    // 일단 보류

    @Id
    @GeneratedValue
    private int noticeId;

    @Size(max = 30)
    @NotNull
    private String title;

    @NotNull
    @Column(columnDefinition = "TEXT")
    private String content;

    private Timestamp publishTime;

    // Todo 연결
//    private int userId;
}
