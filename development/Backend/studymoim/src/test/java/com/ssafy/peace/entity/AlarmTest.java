package com.ssafy.peace.entity;

import com.ssafy.peace.repository.AlarmRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
class AlarmTest {

    @Autowired
    AlarmRepository alarmRepository;

    @Test
    public void 업데이트(){

        Alarm alarm = Alarm.builder()
                .url("dd")
                .content("sdf")
                .build();

        alarmRepository.save(alarm);

        Alarm changedAlarm = alarmRepository.findById(alarm.getAlarmId()).get().builder()
                .url("aa")
                .build();
        alarmRepository.save(alarm);

        Assertions.assertEquals(alarmRepository.findById(alarm.getAlarmId()).get().getUrl(), "aa");


    }



}