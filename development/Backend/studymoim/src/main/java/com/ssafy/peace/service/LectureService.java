package com.ssafy.peace.service;

import com.ssafy.peace.dto.CourseDto;
import com.ssafy.peace.dto.LectureDto;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LectureService {

    private final LectureRepository lectureRepository;

    @Transactional(readOnly = true)
    public List<LectureDto.Info> getLectureInfoListFindAll() {
        // Lecture -> LectureDto.Info
        return lectureRepository.findAll().stream()
                .map(LectureDto.Info::fromEntity)
                .collect(Collectors.toList());

    }

    @Transactional(readOnly = true)
    public Page<LectureDto.Info> getLectureInfoListFindCourseId(int courseId, Pageable pageable) {
        return lectureRepository.findAllByCourse_CourseId(courseId, pageable)
                .map(LectureDto.Info::fromEntity);
    }
}
