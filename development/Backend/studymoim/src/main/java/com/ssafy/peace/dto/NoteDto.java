package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Lecture;
import com.ssafy.peace.entity.Note;
import com.ssafy.peace.entity.User;
import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Builder
public class NoteDto {
    private User user;
    private Lecture lecture;
    private int content;
    private LocalDateTime lastModifiedDate;
    public static NoteDto fromEntity(Note noteEntity) {
        return NoteDto.builder()
                .user(noteEntity.getUser())
                .lecture(noteEntity.getLecture())
                .content(noteEntity.getContent())
                .lastModifiedDate(noteEntity.getLastModifiedDate())
                .build();
    }


}
