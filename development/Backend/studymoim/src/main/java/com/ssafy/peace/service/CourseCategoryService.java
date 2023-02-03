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
import java.util.Map;
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
    public void updateCategoryLikes(Integer userId, List<Map<String, Object>> categories) {
        userLikeCategoryRepository.deleteAllByUser_userId(userId);
        categories.forEach(category -> userLikeCategoryRepository.save(UserLikeCategory.builder()
                .courseCategory(courseCategoryRepository.findById((Integer) category.get("categoryId")).get())
                .user(userRepository.findById(userId).get())
                .build())
        );
    }
}