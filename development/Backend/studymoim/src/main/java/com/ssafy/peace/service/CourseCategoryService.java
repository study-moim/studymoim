package com.ssafy.peace.service;

import com.ssafy.peace.dto.CourseCategoryDto;
import com.ssafy.peace.entity.CourseCategory;
import com.ssafy.peace.repository.CourseCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseCategoryService {

    private final CourseCategoryRepository courseCategoryRepository;

    public List<CourseCategoryDto.Info> getCategoryList() {
        return courseCategoryRepository.findAll().stream()
                .map(CourseCategoryDto.Info::fromEntity)
                .collect(Collectors.toList());

    }
}
