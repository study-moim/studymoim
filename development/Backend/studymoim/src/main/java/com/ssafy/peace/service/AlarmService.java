package com.ssafy.peace.service;

import com.ssafy.peace.dto.AlarmDto;
import com.ssafy.peace.entity.Alarm;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.AlarmRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AlarmService {
    private final UserRepository userRepository;
    private final AlarmRepository alarmRepository;
    @Transactional
    public AlarmDto.Info makeAlarm(AlarmDto.Write alarm) {
        User user = userRepository.findById(alarm.getUserId()).get();
        return AlarmDto.Info.fromEntity(alarmRepository.save(Alarm.builder()
                .content(alarm.getContent())
                .url(alarm.getUrl())
                .user(user)
                .build()));
    }

    public List<AlarmDto.Info> getAlarmList() {
        return alarmRepository.findAll().stream()
                .map(AlarmDto.Info::fromEntity)
                .collect(Collectors.toList());
    }
}
