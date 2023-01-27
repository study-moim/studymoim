package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.repository.FreeBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class FreeBoardService {

    private final FreeBoardRepository freeBoardRepository;

    @Autowired
    public FreeBoardService(FreeBoardRepository freeBoardRepository) {
        this.freeBoardRepository = freeBoardRepository;
    }

    public List<FreeBoardDto.Info> getFreeBoardList() {
        return freeBoardRepository.findAllByIsDeletedIsFalse().stream().map(item ->
            FreeBoardDto.Info.fromEntity(item)
        ).collect(Collectors.toList());
    }

    public void setFreeBoard(FreeBoardDto.Write freeBoard) {
        // TODO: POST
    }

}
