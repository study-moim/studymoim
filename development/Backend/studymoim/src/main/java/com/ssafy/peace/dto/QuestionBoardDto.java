package com.ssafy.peace.dto;


import com.ssafy.peace.entity.QuestionBoard;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class QuestionBoardDto {

    @Data
    @Builder
    @Schema(name="QuestionBoardDto.Info")
    public static class Info {
        private int questionBoardId;
        private String title;
        private String content;
        private int questionTime;
        private int hit;
        private LocalDateTime publishTime;
        public static Info fromEntity(QuestionBoard questionBoard) {
            return Info.builder()
                    .questionBoardId(questionBoard.getQuestionBoardId())
                    .title(questionBoard.getTitle())
                    .content(questionBoard.getContent())
                    .questionTime(questionBoard.getQuestionTime())
                    .hit(questionBoard.getHit())
                    .build();
        }
    }

    @Data
    @Builder
    @Schema(name="QuestionBoardDto.Write")
    public static class Write {
        @Size(min=1, max=20, message = "바르지 않은 title 크기 입니다")
        @NotEmpty(message="title은 빈값 일 수 없습니다")
        @NotNull(message="title은 null 일 수 없습니다")
        private String title;
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;

//        @NotNull(message="isPublic은 null 일 수 없습니다")
//        private boolean isPublic;

        @NotEmpty(message="courseId은 빈값 일 수 없습니다")
        @NotNull(message="courseId은 null 일 수 없습니다")
        private int lectureId;
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private int userId;

//        private int studyId;
    }

    @Data
    @Builder
    @Schema(name="QuestionBoardDto.Detail")
    public static class Detail {
        private int questionBoardId;
        private String title;
        private String content;
        private int questionTime;
        private int hit;
        private LocalDateTime publishTime;
        private LectureDto.Info lecture;
        private UserDto.Info user;
//        private StudyDto.Info study;
        private List<QuestionBoardCommentDto.Detail> questionBoardComments;
        public static Detail fromEntity(QuestionBoard questionBoardEntity) {
            return Detail.builder()
                    .questionBoardId(questionBoardEntity.getQuestionBoardId())
                    .title(questionBoardEntity.getTitle())
                    .content(questionBoardEntity.getContent())
                    .questionTime(questionBoardEntity.getQuestionTime())
                    .hit(questionBoardEntity.getHit())
                    .publishTime(questionBoardEntity.getPublishTime())
                    .lecture(LectureDto.Info.fromEntity(questionBoardEntity.getLecture()))
                    .user(UserDto.Info.fromEntity(questionBoardEntity.getUser()))
//                    .study(StudyDto.Info.fromEntity(questionBoardEntity.getStudy()))
                    .questionBoardComments(questionBoardEntity.getQuestionBoardComments().stream()
                            .map(QuestionBoardCommentDto.Detail::fromEntity)
                            .collect(Collectors.toList()))
                    .build();
        }

    }

}
