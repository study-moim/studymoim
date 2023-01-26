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
public class Course {

    @Id
    @GeneratedValue
    private int courseId;

    @Size(max = 255)
    @NotNull
    private String title;

    // 상세 설명이 없는 재생목록이 있을수도...
    private String content;

    @NotNull
    private Timestamp lastUpdateDate;

    @NotNull
    private boolean isDeleted;

    // Todo courseProviderId 연결
    private int courseProviderId;

    // Todo Course Entity 연결...

}
