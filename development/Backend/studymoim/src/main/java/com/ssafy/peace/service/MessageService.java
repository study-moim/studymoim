package com.ssafy.peace.service;

import com.ssafy.peace.dto.AlarmDto;
import com.ssafy.peace.dto.MessageDto;
import com.ssafy.peace.entity.Alarm;
import com.ssafy.peace.entity.Message;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.MessageRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final UserRepository userRepository;
    private final MessageRepository messageRepository;
    @Transactional
    public MessageDto.Info makeMessage(MessageDto.Write message) {
        User toUser = userRepository.findById(message.getToUserId()).get();
        User fromUser = userRepository.findById(message.getFromUserId()).get();
        return MessageDto.Info.fromEntity(messageRepository.save(Message.builder()
                .toUser(toUser)
                .content(message.getContent())
                .fromUser(fromUser)
                .build()));
    }
}
