package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.NoteId;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@IdClass(NoteId.class)
public class Note {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @NotNull
    private int content;

    @UpdateTimestamp
    private LocalDateTime lastModifiedDate;

    @Builder
    public Note(User user, Lecture lecture, int content) {
        this.user = user;
        this.lecture = lecture;
        this.content = content;
    }
}
