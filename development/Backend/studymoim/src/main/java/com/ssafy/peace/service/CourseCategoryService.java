package com.ssafy.peace.service;

import com.ssafy.peace.dto.CourseCategoryDto;
import com.ssafy.peace.entity.CourseCategory;
import com.ssafy.peace.entity.UserLikeCategory;
import com.ssafy.peace.repository.CourseCategoryRepository;
import com.ssafy.peace.repository.UserLikeCategoryRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseCategoryService {

    private final CourseCategoryRepository courseCategoryRepository;
    private final UserLikeCategoryRepository userLikeCategoryRepository;
    private final UserRepository userRepository;

    public List<CourseCategoryDto.Info> getCategoryList() {
        return courseCategoryRepository.findAll().stream()
                .map(CourseCategoryDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    public void followCategory(Integer categoryId, Integer userId) {
        userLikeCategoryRepository.save(UserLikeCategory.builder()
                .courseCategory(courseCategoryRepository.findById(categoryId).get())
                .user(userRepository.findById(userId).get())
                .build());
    }

    public void unfollowCategory(Integer categoryId, Integer userId) {
        userLikeCategoryRepository.delete(UserLikeCategory.builder()
                .courseCategory(courseCategoryRepository.findById(categoryId).get())
                .user(userRepository.findById(userId).get())
                .build());
    }
}