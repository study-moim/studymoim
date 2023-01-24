package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Table(name = "study_request")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class StudyRequest {

    @Id
    @GeneratedValue
    @Column(name = "study_request_id")
    private int studyRequestId;

    @Column(name = "content")
    @Size(max = 255)
    @NotNull
    private String content;

    @Column(name = "request_time")
    @NotNull
    private Timestamp requestTime;

    @Column(name = "status")
    @NotNull
    private int status;

    @Column(name = "user_id")
    @NotNull
    private int userId;

    @Column(name = "study_id")
    @NotNull
    private int studyId;

}
