package com.ssafy.peace.dto;

import com.ssafy.peace.entity.QuestionBoard;
import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionBoardComment {

    @Data
    @Builder
    public static class Info {
        private int questionBoardCommentId;
        private String content;
        private LocalDateTime publishTime;
        private List<QuestionBoardComment> children;
        private User.Info user;
    }

    @Data
    @Builder
    public static class Write {
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @NotEmpty(message="parentCommentId은 빈값 일 수 없습니다")
        @NotNull(message="parentCommentId은 null 일 수 없습니다")
        private int parentCommentId;
        @NotEmpty(message="questionBoardId은 빈값 일 수 없습니다")
        @NotNull(message="questionBoardId은 null 일 수 없습니다")
        private int questionBoardId;
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private int userId;
    }

}
