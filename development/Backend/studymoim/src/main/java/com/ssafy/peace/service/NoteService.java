package com.ssafy.peace.service;

import com.ssafy.peace.dto.NoteDto;
import com.ssafy.peace.entity.Note;
import com.ssafy.peace.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NoteService {

    private final NoteRepository noteRepository;

    @Transactional
    public NoteDto getNoteByLectureIdByuserId(int lectureId, int userId) {
        List<Note> result = noteRepository.findAllByUser_userIdAndLecture_lectureId(userId, lectureId);
        System.out.println(result);
        if(result.size()==0)    return null;
        return NoteDto.fromEntity(result.get(0));
    }
}
