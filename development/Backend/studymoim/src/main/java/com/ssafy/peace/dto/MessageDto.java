package com.ssafy.peace.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

public class MessageDto {
    @Data
    @Builder
    @Schema(name="MessageDto.Info")
    public static class Info{
        private int messageId;
        private boolean isChecked;
        private String content;
        private UserDto.Info fromUser;
        private UserDto.Info toUser;

        public static MessageDto.Info fromEntity(com.ssafy.peace.entity.Message messageEntity){
            return Info.builder()
                    .messageId(messageEntity.getMessageId())
                    .isChecked(messageEntity.isChecked())
                    .content(messageEntity.getContent())
                    .fromUser(UserDto.Info.fromEntity(messageEntity.getFromUser()))
                    .toUser(UserDto.Info.fromEntity(messageEntity.getToUser()))
                    .build();
        }

    }
}
