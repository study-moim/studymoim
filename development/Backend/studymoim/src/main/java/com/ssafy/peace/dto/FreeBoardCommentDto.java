package com.ssafy.peace.dto;

import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.FreeBoardComment;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class FreeBoardCommentDto {

    @Data
    @Builder
    @Schema(name="FreeBoardCommentDto.Info")
    public static class Info {
        private int freeBoardCommentId;
        private String content;
        private LocalDateTime publishTime;
        private UserDto.Info user;
        public static Info fromEntity(com.ssafy.peace.entity.FreeBoardComment freeBoardCommentEntity) {
            return Info.builder()
                    .freeBoardCommentId(freeBoardCommentEntity.getFreeBoardCommentId())
                    .content(freeBoardCommentEntity.getContent())
                    .publishTime(freeBoardCommentEntity.getPublishTime())
                    .user(UserDto.Info.fromEntity(freeBoardCommentEntity.getUser()))
                    .build();
        }
    }

    @Data
    @Builder
    @Schema(name="FreeBoardCommentDto.Write")
    public static class Write {
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @NotEmpty(message="questionBoardId은 빈값 일 수 없습니다")
        @NotNull(message="questionBoardId은 null 일 수 없습니다")
        private int freeBoardId;
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private int userId;
    }

    @Data
    @Builder
    @Schema(name="FreeBoardCommentDto.Detail")
    public static class Detail {
        private int freeBoardCommentId;
        private String content;
        private LocalDateTime publishTime;
        private FreeBoardDto.Info freeBoard;
        private UserDto.Info user;
        public static Detail fromEntity(FreeBoardComment freeBoardCommentEntity) {
            return Detail.builder()
                    .freeBoardCommentId(freeBoardCommentEntity.getFreeBoardCommentId())
                    .content(freeBoardCommentEntity.getContent())
                    .publishTime(freeBoardCommentEntity.getPublishTime())
                    .user((UserDto.Info.fromEntity(
                            freeBoardCommentEntity.getUser()
                    )))
                    .freeBoard(FreeBoardDto.Info.fromEntity(freeBoardCommentEntity.getFreeBoard()))
                    .build();
        }
    }

}
