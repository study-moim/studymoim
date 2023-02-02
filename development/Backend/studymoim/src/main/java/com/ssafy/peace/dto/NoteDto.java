package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Lecture;
import com.ssafy.peace.entity.Note;
import com.ssafy.peace.entity.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Builder
public class NoteDto {
//    private UserDto.Info user;
//    private LectureDto.Info lecture;

    private int noteId;
    private int userId;
    private int lectureId;
    private String content;
    private LocalDateTime lastModifiedDate;
    public static NoteDto fromEntity(Note noteEntity) {
        return NoteDto.builder()
                .noteId(noteEntity.getNoteId())
                .userId(UserDto.Info.fromEntity(noteEntity.getUser()).getUserId())
                .lectureId(LectureDto.Info.fromEntity(noteEntity.getLecture()).getLectureId())
                .content(noteEntity.getContent())
                .lastModifiedDate(noteEntity.getLastModifiedDate())
                .build();
    }


}
