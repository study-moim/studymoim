package com.ssafy.peace.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class MessageDto {
    @Data
    @Builder
    @Schema(name="MessageDto.Info")
    public static class Info{
        private int messageId;
        private boolean isChecked;
        private UserDto.Info toUser;
        private String content;
        private UserDto.Info fromUser;
        private LocalDateTime sendTime;

        public static Info fromEntity(com.ssafy.peace.entity.Message messageEntity){
            return Info.builder()
                    .messageId(messageEntity.getMessageId())
                    .isChecked(messageEntity.isChecked())
                    .toUser(UserDto.Info.fromEntity(messageEntity.getToUser()))
                    .content(messageEntity.getContent())
                    .fromUser(UserDto.Info.fromEntity(messageEntity.getFromUser()))
                    .sendTime(messageEntity.getSendTime())
                    .build();
        }
    }

    @Data
    @Builder
    @Schema(name="MessageDto.Write")
    public static class Write {
        @NotEmpty(message="toUserId는 빈값 일 수 없습니다")
        @NotNull(message="toUserId는 null 일 수 없습니다")
        private int toUserId;
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @NotEmpty(message="fromUserId는 빈값 일 수 없습니다")
        @NotNull(message="fromUserId는 null 일 수 없습니다")
        private int fromUserId;
    }
}
