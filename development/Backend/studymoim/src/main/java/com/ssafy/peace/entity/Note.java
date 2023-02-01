package com.ssafy.peace.entity;

import com.ssafy.peace.entity.key.NoteId;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Note {

    @Id
    @GeneratedValue
    private int noteId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @Column(columnDefinition = "TEXT")
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
