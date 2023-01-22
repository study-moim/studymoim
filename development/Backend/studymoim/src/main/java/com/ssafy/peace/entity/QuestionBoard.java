package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Table(name = "question_board")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class QuestionBoard {

    @Id
    @GeneratedValue
    @Column(name = "question_board_id")
    private int questionBoardId;

    @Column(name = "title")
    @Size(max = 20)
    @NotNull
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "question_time")
    @NotNull
    private int questionTime;

    @Column(name = "is_deleted")
    @NotNull
    private boolean isDeleted;

    @Column(name = "hit")
    @NotNull
    private int hit;

    @Column(name = "is_public")
    @NotNull
    private boolean isPublic;

    @Column(name = "publish_time")
    @NotNull
    private Timestamp publishTime;

    @Column(name = "course_id")
    @NotNull
    private int courseId;

    @Column(name = "user_id")
    @NotNull
    private int userId;

    @Column(name = "study_id")
    private int studyId;

    // TODO: 연결...
}
