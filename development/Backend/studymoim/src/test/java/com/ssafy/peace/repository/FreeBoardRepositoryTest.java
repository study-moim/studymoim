package com.ssafy.peace.repository;

import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.FreeBoardComment;
import com.ssafy.peace.entity.User;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles(profiles = "dev")
public class FreeBoardRepositoryTest {

//    @Autowired
//    FreeBoardRepository freeBoardRepository;
//
//    @BeforeEach
//    public void initialData() {
//        FreeBoard article = new FreeBoard(1, "Test1", "Test content", LocalDateTime.now(), false, 12,
//                User.builder().
//                        userId(1).
//                        build(),
//                new ArrayList<>());
//        freeBoardRepository.save(article);
//    }
//
//    @Test
//    @Transactional
//    public void saveTest() {
//        FreeBoard article = new FreeBoard(2, "Test", "Test content", LocalDateTime.now(), false, 12,
//                User.builder().
//                build(),
//                new ArrayList<>());
//        FreeBoard result = freeBoardRepository.save(article);
//        assertNotNull(result);
//    }
//
//    @Test
//    @Transactional
//    public void findAllTest() {
//        List<FreeBoard> result = freeBoardRepository.findAllByIsDeletedIsFalse();
//        assertEquals(1, result.size());
//
//    }

}
