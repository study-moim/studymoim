package com.ssafy.peace.dto;

import com.ssafy.peace.entity.*;
import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.FreeBoardComment;
import com.ssafy.peace.entity.QuestionBoard;
import com.ssafy.peace.entity.QuestionBoardComment;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class UserDto {

    @Data
    @Builder
    public static class Info {
        private int userId;
        private String email;
        private String nickname;
        private String saveName;
        private LocalDateTime registerDate;
        private LocalDateTime lastAccessTime;
        private String refreshToken;
        public static Info fromEntity(com.ssafy.peace.entity.User userEntity) {
            return Info.builder()
                    .userId(userEntity.getUserId())
                    .email(userEntity.getEmail())
                    .nickname(userEntity.getNickname())
                    .saveName(userEntity.getSaveName())
                    .registerDate(userEntity.getRegisterDate())
                    .lastAccessTime(userEntity.getLastLoginTime())
                    .refreshToken(userEntity.getRefreshToken())
                    .build();
        }
    }

    @Data
    @Builder
    public static class Register {
        @Size(min=5, max=50, message = "바르지 않은 email 크기 입니다")
        @NotEmpty(message="email은 빈값 일 수 없습니다")
        @NotNull(message="email은 null 일 수 없습니다")
        @Pattern(regexp="^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
                message = "바르지 않은 email 형식입니다")
        private String email;
        @Size(min=8, max=20, message = "바르지 않은 password 크기 입니다")
        @NotEmpty(message="password는 빈값 일 수 없습니다")
        @NotNull(message="password는 null 일 수 없습니다")
        @Pattern(regexp="^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
                message = "바르지 않은 password 형식입니다")
        private String password;
        @Size(min=2, max=6, message = "바르지 않은 nickname 크기 입니다")
        @NotEmpty(message="nickname은 빈값 일 수 없습니다")
        @NotNull(message="nickname은 null 일 수 없습니다")
        private String nickname;
        @Size(max = 255)
        private String saveName;
    }

    @Data
    @Builder
    public static class Login {
        @Size(min=5, max=50, message = "바르지 않은 email 크기 입니다")
        @NotEmpty(message="email은 빈값 일 수 없습니다")
        @NotNull(message="email은 null 일 수 없습니다")
        @Pattern(regexp="^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
                message = "바르지 않은 email 형식입니다")
        private String email;
        @Size(min=8, max=20, message = "바르지 않은 password 크기 입니다")
        @NotEmpty(message="password는 빈값 일 수 없습니다")
        @NotNull(message="password는 null 일 수 없습니다")
        @Pattern(regexp="^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
                message = "바르지 않은 password 형식입니다")
        private String password;
        @Size(min=2, max=6, message = "바르지 않은 nickname 크기 입니다")
        @NotEmpty(message="nickname은 빈값 일 수 없습니다")
        @NotNull(message="nickname은 null 일 수 없습니다")
        private String nickname;
        @Size(max = 255)
        private String saveName;
    }

    public static class Detail {
        private int userId;
        private String email;
        private String nickname;
        private String saveName;
        private LocalDateTime registerDate;
        private LocalDateTime lastLoginTime;
        private boolean isQuit;
        private LocalDateTime quitTime;
        private List<AlarmDto> alarms = new ArrayList<>();
        private List<FreeBoard> freeBoards = new ArrayList<>();
        private List<FreeBoardComment> freeBoardComments = new ArrayList<>();
        private List<Message> sendMessages = new ArrayList<>();
        private List<Message> receivedMessages = new ArrayList<>();
        private List<Note> notes = new ArrayList<>();
        private List<QuestionBoard> questionBoards = new ArrayList<>();
        private List<QuestionBoardComment> questionBoardComments = new ArrayList<>();
        private List<StudyCommunity> studyCommunities = new ArrayList<>();
        private List<StudyMember> studyMembers = new ArrayList<>();
        private List<StudyRequest> studyRequests = new ArrayList<>();
        private List<UserHistory> userHistories = new ArrayList<>();
        private List<UserLikeCategory> userLikeCategories = new ArrayList<>();
        private List<UserLikeCourse> userLikeCourses = new ArrayList<>();
    }

    @Data
    @Builder
    public static class Id {
        private int userId;

    }

}
