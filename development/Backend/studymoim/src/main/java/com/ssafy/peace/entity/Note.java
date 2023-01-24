package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.NoteId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Table(name = "note")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@IdClass(NoteId.class)
public class Note {

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;

    @Id
    @ManyToOne
    @JoinColumn(name = "lecture_id")
    private Lecture lectureId;

    @Column(name = "content")
    @NotNull
    private int content;

    @Column(name = "last_modified_date")
    @NotNull
    private int lastModifiedDate;

    @Column(name = "is_deleted")
    @NotNull
    private boolean isDeleted;

}
