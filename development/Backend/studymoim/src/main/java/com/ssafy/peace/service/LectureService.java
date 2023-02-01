package com.ssafy.peace.service;

import com.ssafy.peace.dto.CourseDto;
import com.ssafy.peace.dto.LectureDto;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LectureService {

    private final LectureRepository lectureRepository;
    private final CourseRepository courseRepository;
    private final NoteRepository noteRepository;
    private final UserHistoryRepository userHistoryRepository;

    @Transactional(readOnly = true)
    public List<LectureDto.Info> getLectureInfoListFindAll() {
        // Lecture -> LectureDto.Info
        return lectureRepository.findAll().stream()
                .map(LectureDto.Info::fromEntity)
                .collect(Collectors.toList());

    }

    @Transactional(readOnly = true)
    public List<LectureDto.Info> getLectureInfoListFindCourseId(int courseId) {
        return lectureRepository.findAllByCourse_CourseId(courseId).stream()
                .map(LectureDto.Info::fromEntity)
                .collect(Collectors.toList());
    }
}
