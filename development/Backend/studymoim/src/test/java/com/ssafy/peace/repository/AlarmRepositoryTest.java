package com.ssafy.peace.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class AlarmRepositoryTest {

    @Autowired
    public AlarmRepository alarmRepository;

    @Test
    public void 알람(){

    }

}