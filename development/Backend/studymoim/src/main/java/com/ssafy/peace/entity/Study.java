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

}
