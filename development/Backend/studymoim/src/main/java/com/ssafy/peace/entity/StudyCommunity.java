package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Table(name = "study_community")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class StudyCommunity {

    @Id
    @GeneratedValue
    @Column(name = "study_community_id")
    private int studyCommunityId;

    @Column(name = "content")
    @NotNull
    private String content;

    @Column(name = "publish_time")
    @NotNull
    private Timestamp publishTime;

    @Column(name = "is_deleted")
    @NotNull
    private boolean isDeleted;

    @Column(name = "user_id")
    @NotNull
    private int userId;

    @Column(name = "study_id")
    @NotNull
    private int studyId;

    // TODO: 연결...
}
