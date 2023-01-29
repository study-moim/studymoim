package com.ssafy.peace.api;

import com.ssafy.peace.dto.ChatMessageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class ChatController {

    private final SimpMessagingTemplate template;

    @MessageMapping("/chat/message")
    @SendTo("/topic/chat/{studyId}")
    public ChatMessageDto message(ChatMessageDto message) {
        return message;
    }
}



