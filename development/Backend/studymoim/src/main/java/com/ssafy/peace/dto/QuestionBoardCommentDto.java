package com.ssafy.peace.dto;

import com.ssafy.peace.entity.QuestionBoardComment;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class QuestionBoardCommentDto {

    @Data
    @Builder
    @Schema(name="QuestionBoardCommentDto.Info")
    public static class Info {
        private int questionBoardCommentId;
        private String content;
        private LocalDateTime publishTime;
        public static Info fromEntity(QuestionBoardComment questionBoardCommentEntity) {
            return Info.builder()
                    .questionBoardCommentId(questionBoardCommentEntity.getQuestionBoardCommentId())
                    .content(questionBoardCommentEntity.getContent())
                    .publishTime(questionBoardCommentEntity.getPublishTime())
                    .build();
        }
    }

    @Data
    @Builder
    @Schema(name="QuestionBoardCommentDto.Write")
    public static class Write {
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @NotEmpty(message="questionBoardId은 빈값 일 수 없습니다")
        @NotNull(message="questionBoardId은 null 일 수 없습니다")
        private int questionBoardId;
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private int userId;
    }

    @Data
    @Builder
    public static class Detail {
        private int questionBoardCommentId;
        private String content;
        private LocalDateTime publishTime;
        private UserDto.Info user;
        public static Detail fromEntity(QuestionBoardComment questionBoardCommentEntity) {
            return Detail.builder()
                    .questionBoardCommentId(questionBoardCommentEntity.getQuestionBoardCommentId())
                    .content(questionBoardCommentEntity.getContent())
                    .publishTime(questionBoardCommentEntity.getPublishTime())
                    .user(UserDto.Info.fromEntity(questionBoardCommentEntity.getUser()))
                    .build();
        }
    }

}
