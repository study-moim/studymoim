package com.ssafy.peace.dto;

import com.ssafy.peace.entity.FreeBoard;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


public class FreeBoardDto {

    @Data
    @Builder
    @Schema(name="FreeBoardDto.Info")
    public static class Info {
        private int freeBoardId;
        private String title;
        private String content;
        private int hit;
        private LocalDateTime publishTime;
        private UserDto.Info user;
        public static Info fromEntity(com.ssafy.peace.entity.FreeBoard freeBoardEntity) {
            return Info.builder()
                    .freeBoardId(freeBoardEntity.getFreeBoardId())
                    .title(freeBoardEntity.getTitle())
                    .content(freeBoardEntity.getContent())
                    .hit(freeBoardEntity.getHit())
                    .publishTime(freeBoardEntity.getPublishTime())
                    .user(UserDto.Info.fromEntity(freeBoardEntity.getUser()))
                    .build();
        }
    }

    @Data
    @Builder
    @Schema(name="FreeBoardDto.Write")
    public static class Write {
        @Size(min=1, max=20, message = "바르지 않은 title 크기 입니다")
        @NotEmpty(message="title은 빈값 일 수 없습니다")
        @NotNull(message="title은 null 일 수 없습니다")
        private String title;
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private int userId;
    }

    @Data
    @Builder
    @Schema(name="FreeBoardDto.Detail")
    public static class Detail {
        private int freeBoardId;
        private String title;
        private String content;
        private int hit;
        private LocalDateTime publishTime;
        private UserDto.Info user;
        private List<FreeBoardCommentDto.Info> freeBoardComments;
        public static Detail fromEntity(FreeBoard freeBoardEntity) {
            return Detail.builder()
                    .freeBoardId(freeBoardEntity.getFreeBoardId())
                    .title(freeBoardEntity.getTitle())
                    .content(freeBoardEntity.getContent())
                    .hit(freeBoardEntity.getHit())
                    .publishTime(freeBoardEntity.getPublishTime())
                    .user(UserDto.Info.fromEntity(freeBoardEntity.getUser()))
                    .freeBoardComments(freeBoardEntity.getFreeBoardComments().stream()
                            .map(FreeBoardCommentDto.Info::fromEntity)
                            .collect(Collectors.toList()))
                    .build();
        }
    }

}
