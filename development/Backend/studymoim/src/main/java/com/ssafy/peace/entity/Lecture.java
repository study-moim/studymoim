package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@DynamicInsert
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
//@Table(
//        uniqueConstraints={
//                @UniqueConstraint(
//                        name="course_id_video_id_unique",
//                        columnNames={"course_id", "video_id"}
//                )
//        }
//)
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

    // 영상 설명이 비어있을 수도 있다
    @Column(columnDefinition = "TEXT")
    private String content;

    @Size(max = 255)
    @NotNull
    private String videoId;

    @NotNull
    @ColumnDefault("false")
    private boolean isDeleted;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    @OneToMany(mappedBy = "lecture")
    private List<Note> notes = new ArrayList<>();

    @OneToMany(mappedBy = "lecture")
    private List<StudyHistory> studyHistories = new ArrayList<>();

    @OneToMany(mappedBy = "lecture")
    private List<UserHistory> userHistories = new ArrayList<>();

    // Builder
    @Builder
    public Lecture(String title, int length, String thumbnail, String content, String videoId, Course course) {
        this.title = title;
        this.length = length;
        this.thumbnail = thumbnail;
        this.content = content;
        this.videoId = videoId;
        this.course = course;
    }
}
