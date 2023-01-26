package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


public class FreeBoard {

    @Data
    @Builder
    public static class Info {
        private int freeBoardId;
        private String title;
        private String content;
        private int hit;
        private LocalDateTime publishTime;
        private User user;
        private List<FreeBoardComment> freeBoardComments;
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
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private int userId;
    }
}
