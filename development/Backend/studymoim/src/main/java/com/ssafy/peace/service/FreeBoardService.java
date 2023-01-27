package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.FreeBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import javax.persistence.PersistenceException;
import javax.persistence.RollbackException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FreeBoardService {

    private final FreeBoardRepository freeBoardRepository;
    @Autowired
    public FreeBoardService(FreeBoardRepository freeBoardRepository) {
        this.freeBoardRepository = freeBoardRepository;
    }

    @Transactional
    public List<FreeBoardDto.Info> getFreeBoardList() throws RollbackException {
        return freeBoardRepository.findAllByIsDeletedIsFalse().stream()
                .map(FreeBoardDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public void setFreeBoard(FreeBoardDto.Write freeBoard) throws RollbackException  {
        freeBoardRepository.save(FreeBoard.builder()
                .title(freeBoard.getTitle())
                .content(freeBoard.getContent())
                .user(User.builder().userId(freeBoard.getUserId()).build())
                .build());
    }

}
