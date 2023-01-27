package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class FreeBoardComment {

    @Data
    @Builder
    public static class Info {
        private int freeBoardCommentId;
        private String content;
        private LocalDateTime publishTime;
        private List<FreeBoardComment.Info> children;
        private FreeBoard freeBoard;
        private User.Info user;
        public static Info fromEntity(com.ssafy.peace.entity.FreeBoardComment freeBoardCommentEntity) {
            return Info.builder()
                    .freeBoardCommentId(freeBoardCommentEntity.getFreeBoardCommentId())
                    .content(freeBoardCommentEntity.getContent())
                    .publishTime(freeBoardCommentEntity.getPublishTime())
                    .children(freeBoardCommentEntity.getChildren().stream()
                            .map(child -> Info.fromEntity(child))
                            .collect(Collectors.toList()))
                    .user((User.Info.fromEntity(
                            freeBoardCommentEntity.getUser()
                    )))
                    .build();
        }
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
        private int freeBoardId;
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private int userId;
    }

    @Data
    @Builder
    public static class Detail {
        private int freeBoardCommentId;
        private String content;
        private LocalDateTime publishTime;
        private List<FreeBoardComment> children;
        private FreeBoard freeBoard;
        private User user;
    }

}
