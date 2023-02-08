package com.ssafy.peace.entity;

import lombok.*;
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
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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
    @Column(columnDefinition = "TEXT")
    private String content;

    @NotNull
    private int questionTime;

    @ColumnDefault("false")
    private boolean isDeleted;

    @ColumnDefault("0")
    private int hit;

//    @NotNull
//    private boolean isPublic;

    @CreationTimestamp
    private LocalDateTime publishTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "study_id")
//    private Study study;

    @OneToMany(mappedBy = "questionBoard")
    private List<QuestionBoardComment> questionBoardComments = new ArrayList<>();

    @Builder
//    public QuestionBoard(String title, String content, int questionTime, int hit, boolean isDeleted, boolean isPublic, Lecture lecture, User user, Study study) {
    public QuestionBoard(String title, String content, int questionTime, int hit, boolean isDeleted, Lecture lecture, User user) {

        this.title = title;
        this.content = content;
        this.questionTime = questionTime;
        this.isDeleted = isDeleted;
        this.hit = hit;
//        this.isPublic = isPublic;
        this.lecture = lecture;
        this.user = user;
//        this.study = study;
    }

    public QuestionBoard updateId(Integer id){
        this.questionBoardId = id;
        return this;
    }

    public QuestionBoard delete(){
        this.isDeleted = true;
        return this;
    }

    public QuestionBoard hit() {
        this.hit++;
        return this;
    }
}
