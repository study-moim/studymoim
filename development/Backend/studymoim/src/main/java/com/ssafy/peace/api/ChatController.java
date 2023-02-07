package com.ssafy.peace.api;

import com.ssafy.peace.dto.ChatMessageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ChatController {

    private final SimpMessagingTemplate template;

    @MessageMapping("/chat")
    public void message(ChatMessageDto message) {
        System.out.println(message.getPayload());
        System.out.println(message.getStudyId());
        System.out.println(message.getSender());
        template.convertAndSend("/sub/study/"+message.getStudyId(), message);
    }
    @MessageMapping("/sync")
    public void sychronize(ChatMessageDto message) {
        System.out.println(message.getPayload());
        System.out.println(message.getStudyId());
        System.out.println(message.getUserId());
        template.convertAndSend("/sub/study/"+message.getStudyId(), message);
    }
}



