package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class StudyRequest {

    @Id
    @GeneratedValue
    private int studyRequestId;

    @Size(max = 255)
    @NotNull
    private String content;

    @NotNull
    private Timestamp requestTime;

    @NotNull
    private int status;

    @NotNull
    private int userId;

    @NotNull
    private int studyId;

}
