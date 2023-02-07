package com.ssafy.peace.dto;

import lombok.Builder;
import lombok.Data;

/**
 * 실시간 채팅 메세지
 * 스터디당 채팅방 1개 -> 채팅방 id로 사용
 */
@Data
@Builder
public class ChatMessageDto {
    private String type;
    private int studyId;
    private int userId;
    private String sender;
    private Object payload;
}
