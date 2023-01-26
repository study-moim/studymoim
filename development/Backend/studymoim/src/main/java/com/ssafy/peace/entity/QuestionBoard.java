package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@DynamicInsert
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class QuestionBoard {

    @Id
    @GeneratedValue
    private int questionBoardId;

    @Size(max = 20)
    @NotNull
    private String title;

    @NotNull
    private String content;

    @NotNull
    private int questionTime;

    @ColumnDefault("false")
    private boolean isDeleted;

    @NotNull
    private int hit;

    @NotNull
    private boolean isPublic;

    @CreationTimestamp
    private LocalDateTime publishTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_id")
    private Study study;

    @OneToMany(mappedBy = "questionBoard")
    private List<QuestionBoardComment> questionBoardComments = new ArrayList<>();

}
