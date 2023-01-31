package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.CreatedBy;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Course {
    @Id
    @GeneratedValue
    private int courseId;

    @Size(max = 255)
    @NotNull
    private String title;

    @Size(max = 255)
    @NotNull
    private String thumbnail;

    // 상세 설명이 없는 재생목록이 있을수도...
    @Column(columnDefinition = "TEXT")
    private String content;

    @Size(max = 255)
    @NotNull
    @Column(unique = true)
    private String playlistId;

    @NotNull
    @ColumnDefault("false")
    private boolean isDeleted;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_provider_id")
    private CourseProvider courseProvider;

    @OneToMany(mappedBy = "course")
    private List<CourseType> courseTypes = new ArrayList<>();

    @OneToMany(mappedBy = "course")
    private List<Curriculum> curricula = new ArrayList<>();

    @OneToMany(mappedBy = "course")
    private List<Lecture> lectures = new ArrayList<>();

    @OneToMany(mappedBy = "course")
    private List<UserLikeCourse> userLikeCourses = new ArrayList<>();

    @OneToMany(mappedBy = "course")
    private List<QuestionBoard> questionBoards = new ArrayList<>();

    // Builder
    @Builder
    public Course(String title, String content, String playlistId, String thumbnail, CourseProvider courseProvider, boolean isDeleted) {
        this.title = title;
        this.content = content;
        this.playlistId = playlistId;
        this.thumbnail = thumbnail;
        this.courseProvider = courseProvider;
        this.isDeleted = isDeleted;
    }
}
