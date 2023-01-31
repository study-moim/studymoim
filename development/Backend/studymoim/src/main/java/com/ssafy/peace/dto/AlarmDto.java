package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Alarm;
import com.ssafy.peace.entity.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class AlarmDto {
    @Data
    @Builder
    @Schema(name="AlarmDto.Info")
    public static class Info{
        private UserDto.Info user;
        private boolean isChecked;
        private String content;
        private String url;

        public static Info fromEntity(Alarm alarmEntity){
            return Info.builder()
                    .user(UserDto.Info.fromEntity(alarmEntity.getUser()))
                    .isChecked(alarmEntity.isChecked())
                    .content(alarmEntity.getContent())
                    .url(alarmEntity.getUrl())
                    .build();
        }

    }
    @Data
    @Builder
    @Schema(name="AlarmDto.Write")
    public static class Write {
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private int userId;
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @NotEmpty(message="url은 빈값 일 수 없습니다")
        @NotNull(message="url은 null 일 수 없습니다")
        private String url;
    }
}
