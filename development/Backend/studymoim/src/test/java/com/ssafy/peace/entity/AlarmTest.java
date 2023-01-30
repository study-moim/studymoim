package com.ssafy.peace.entity;

import com.ssafy.peace.repository.AlarmRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
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
        alarmRepository.save(changedAlarm);

        Assertions.assertEquals("aa", alarmRepository.findById(changedAlarm.getAlarmId()).get().getUrl());


    }



}