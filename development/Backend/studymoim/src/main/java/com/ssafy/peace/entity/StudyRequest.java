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

@DynamicInsert
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

    @CreationTimestamp
    private LocalDateTime requestTime;

    @ColumnDefault("0")
    private int status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_id")
    private Study study;

}
