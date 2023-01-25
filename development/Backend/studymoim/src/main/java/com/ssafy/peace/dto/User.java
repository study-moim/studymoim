package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Data
public class User {

    @Data
    @Builder
    public static class Info {
        private int userId;
        private String email;
        private String nickname;
        private String saveName;
        private Timestamp registerDate;
        private Timestamp lastAccessTime;
        private boolean isQuit;
        private Timestamp quitTime;
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
        @Size(min=2, max=6, message = "바르지 않은 password 크기 입니다")
        @NotEmpty(message="nickname은 빈값 일 수 없습니다")
        @NotNull(message="nickname은 null 일 수 없습니다")
        private String nickname;
        @Size(max = 255)
        private String saveName;
    }



}
