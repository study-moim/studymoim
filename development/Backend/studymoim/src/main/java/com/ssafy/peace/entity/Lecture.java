package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Lecture {

    @Id
    @GeneratedValue
    private int lectureId;

    @Size(max = 255)
    @NotNull
    private String title;

    @NotNull
    private int length;

    @Size(max = 255)
    @NotNull
    private String thumbnail;

    @NotNull
    private String content;

    @Size(max = 255)
    @NotNull
    private String url;

    @NotNull
    private boolean isDeleted;

    // Todo 연결
    private int courseId;
}
