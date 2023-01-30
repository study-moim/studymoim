package com.ssafy.peace;

import com.ssafy.peace.entity.Alarm;
import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.FreeBoardComment;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.AlarmRepository;
import com.ssafy.peace.repository.FreeBoardCommentRepository;
import com.ssafy.peace.repository.FreeBoardRepository;
import com.ssafy.peace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FreeBoardRepository freeBoardRepository;
    @Autowired
    private FreeBoardCommentRepository freeBoardCommentRepository;



    @Override
    public void run(String... args) throws Exception {

        // User 3명
        addUsers();

        // 글 한개 작성
        addFreeBoard();
    }

    public void addUsers(){
        List<User> userList = new ArrayList<>();
        User user1 = User.builder()
                .email("ssafykim@google.com")
                .nickname("싸피킴")
                .build();
        userList.add(user1);
        User user2 = User.builder()
                .email("ssafypark@google.com")
                .nickname("싸피팍")
                .build();
        userList.add(user2);
        User user3 = User.builder()
                .email("ssafyjung@google.com")
                .nickname("싸피정")
                .build();
        userList.add(user3);

        userRepository.saveAll(userList);
    }

    public void addFreeBoard(){
        User writer = userRepository.findById(1).orElse(null);
        FreeBoard freeBoard = FreeBoard.builder()
                .user(writer)
                .title("에러가 너무 많이 나요")
                .content("문제 해결을 못하겠어요")
                .build();
        freeBoardRepository.save(freeBoard);
        addComment(freeBoard);

        User writer2 = userRepository.findById(2).orElse(null);
        FreeBoard freeBoard2 = FreeBoard.builder()
                .user(writer2)
                .title("카카오 로그인이 안대요")
                .content("포기해도 되나요?")
                .build();
        freeBoardRepository.save(freeBoard2);
    }

    public void addComment(FreeBoard freeBoard){
        FreeBoard targetBoard = freeBoardRepository.findById(freeBoard.getFreeBoardId()).orElse(null);
        User commenter = userRepository.findById(2).orElse(null);
        User commenter2 = userRepository.findById(3).orElse(null);


        FreeBoardComment freeBoardComment = FreeBoardComment.builder()
                .user(commenter)
                .content("컴퓨터 함 밀어버리세요")
                .freeBoard(targetBoard)
                .build();
        freeBoardCommentRepository.save(freeBoardComment);
        FreeBoardComment freeBoardComment2 = FreeBoardComment.builder()
                .user(commenter2)
                .parentComment(freeBoardComment)
                .content("너무 과격한거 아닌가요")
                .freeBoard(targetBoard)
                .build();
        freeBoardCommentRepository.save(freeBoardComment2);

    }
}
