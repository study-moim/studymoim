package com.ssafy.peace.dto;


import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class QuestionBoard {

    @Data
    @Builder
    public static class Info {
        private int questionBoardId;
        private String title;
        private String content;
        private int questionTime;
        private int hit;
        private LocalDateTime publishTime;
        private Course.Info course;
        private User user;
        private Study study;
        private List<QuestionBoardComment> questionBoardComments = new ArrayList<>();
    }

    @Data
    @Builder
    public static class Write {
        @Size(min=1, max=20, message = "바르지 않은 title 크기 입니다")
        @NotEmpty(message="title은 빈값 일 수 없습니다")
        @NotNull(message="title은 null 일 수 없습니다")
        private String title;
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @NotNull(message="isPublic은 null 일 수 없습니다")
        private boolean isPublic;
        @NotEmpty(message="courseId은 빈값 일 수 없습니다")
        @NotNull(message="courseId은 null 일 수 없습니다")
        private int courseId;
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private int userId;
        private int studyId;
    }

}
