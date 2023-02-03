package com.ssafy.peace.service;

import com.ssafy.peace.dto.CourseCategoryDto;
import com.ssafy.peace.entity.CourseCategory;
import com.ssafy.peace.entity.UserLikeCategory;
import com.ssafy.peace.repository.CourseCategoryRepository;
import com.ssafy.peace.repository.UserLikeCategoryRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public void updateCategoryLikes(Integer userId, List<Integer> categories) {
        userLikeCategoryRepository.deleteAllByUser_userId(userId);
        categories.forEach(categoryId -> userLikeCategoryRepository.save(UserLikeCategory.builder()
                .courseCategory(courseCategoryRepository.findById(categoryId).get())
                .user(userRepository.findById(userId).get())
                .build())
        );
    }
}