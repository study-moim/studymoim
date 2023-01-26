package com.ssafy.peace.service;

import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.FreeBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class FreeBoardService {

    private final FreeBoardRepository freeBoardRepository;

    @Autowired
    public FreeBoardService(FreeBoardRepository freeBoardRepository) {
        this.freeBoardRepository = freeBoardRepository;
    }

    public List<FreeBoard> getFreeBoardList() {
        return freeBoardRepository.findAllByIsDeletedIsFalse();
    }

    public List<FreeBoard> setFreeBoard(com.ssafy.peace.dto.FreeBoard.Write freeBoard) {
        FreeBoard item = FreeBoard.builder().
            title(freeBoard.getTitle()).
            content(freeBoard.getContent()).
            user(User.builder().userId(freeBoard.getUserId()).build()).
        build();
        return freeBoardRepository.findAllByIsDeletedIsFalse();
    }

}
