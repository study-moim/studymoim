package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Table(name = "lecture")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Lecture {

    @Id
    @GeneratedValue
    @Column(name = "lecture_id")
    private int lectureId;

    @Column(name = "title")
    @Size(max = 255)
    @NotNull
    private String title;

    @Column(name = "length")
    @NotNull
    private int length;

    @Column(name = "thumbnail")
    @Size(max = 255)
    @NotNull
    private String thumbnail;

    @Column(name = "content")
    @NotNull
    private String content;

    @Column(name = "url")
    @Size(max = 255)
    @NotNull
    private String url;

    @Column(name = "Is_deleted")
    @NotNull
    private boolean isDeleted;

    // Todo 연결
    private int courseId;
}
