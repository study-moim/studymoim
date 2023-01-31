package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Study {

    @Id
    @GeneratedValue
    private int studyId;

    @CreationTimestamp
    private LocalDateTime creationTime;

    @Size(max = 30)
    @NotNull
    private String title;

    @NotNull
    @Column(columnDefinition = "TEXT")
    private String content;

    // Todo: 디폴트 사진 정하기
    @Size(max = 255)
    private String saveName;

    @ColumnDefault("true")
    private boolean isOpen;

    @NotNull
    private int userLimit;

    @NotNull
    private boolean isPublic;

    @Size(max = 100)
    private String notice;

    @NotNull
    @ColumnDefault("false")
    private boolean isFinished;

    @OneToMany(mappedBy = "study")
    private List<Curriculum> curricula = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<QuestionBoard> questionBoards = new ArrayList<>();

    @OneToMany(mappedBy = "study")
    private List<StudyCommunity> studyCommunities = new ArrayList<>();

    @OneToMany(mappedBy = "study")
    private List<StudyHistory> studyHistories = new ArrayList<>();

    @OneToMany(mappedBy = "study")
    private List<StudyMember> studyMembers = new ArrayList<>();

    @OneToMany(mappedBy = "study")
    private List<StudyRequest> studyRequests = new ArrayList<>();

    @Builder

    public Study(int studyId, String title, String content, String saveName, boolean isOpen, int userLimit, boolean isPublic, String notice, boolean isFinished) {
        this.studyId = studyId;
        this.title = title;
        this.content = content;
        this.saveName = saveName;
        this.isOpen = isOpen;
        this.userLimit = userLimit;
        this.isPublic = isPublic;
        this.notice = notice;
        this.isFinished = isFinished;
    }
}
