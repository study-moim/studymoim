package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Table(name = "course")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Course {

    @Id
    @GeneratedValue
    @Column(name = "course_id")
    private int course_id;

    @Column(name = "title")
    @Size(max = 255)
    @NotNull
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "last_update_date")
    @NotNull
    private Timestamp lastUpdateDate;

    @Column(name = "is_deleted")
    @NotNull
    private boolean isDeleted;

    // Todo courseProviderId 연결
    private int courseProviderId;

    // Todo Course Entity 연결...

}
