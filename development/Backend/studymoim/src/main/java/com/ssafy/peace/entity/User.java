package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class User {

    // Todo 컬럼
    @Id
    @GeneratedValue
    private int userId;

    @Size(max = 50)
    @NotNull
    private String email;

    @Size(max = 10)
    private String nickname;

    // Todo: 기본 이미지 연결
    @Size(max = 255)
    private String saveName;

    @CreationTimestamp
    private LocalDateTime registerDate;

    @UpdateTimestamp
    private LocalDateTime lastLoginTime;

    @ColumnDefault("false")
    private boolean isQuit;

    private LocalDateTime quitTime;

    @Size(max = 1000)
    private String refreshToken;

    @OneToMany(mappedBy = "user")
    private List<Alarm> alarms = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<FreeBoard> freeBoards = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<FreeBoardComment> freeBoardComments = new ArrayList<>();

    // 보낸 쪽지
    @OneToMany(mappedBy = "fromUser")
    private List<Message> sendMessages = new ArrayList<>();

    // 받은 쪽지
    @OneToMany(mappedBy = "toUser")
    private List<Message> receivedMessages = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Note> notes = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<QuestionBoard> questionBoards = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<QuestionBoardComment> questionBoardComments = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<StudyCommunity> studyCommunities = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<StudyMember> studyMembers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<StudyRequest> studyRequests = new ArrayList<>();


    @OneToMany(mappedBy = "user")
    private List<UserHistory> userHistories = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<UserLikeCategory> userLikeCategories = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<UserLikeCourse> userLikeCourses = new ArrayList<>();

    @Builder
    public User(String email, String nickname, String saveName, boolean isQuit, LocalDateTime quitTime, String refreshToken) {
        this.email = email;
        this.nickname = nickname;
        this.saveName = saveName;
        this.isQuit = isQuit;
        this.quitTime = quitTime;
        this.refreshToken = refreshToken;
    }
}
