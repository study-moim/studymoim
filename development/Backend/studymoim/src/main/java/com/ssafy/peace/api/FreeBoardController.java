package com.ssafy.peace.api;

import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.service.FreeBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/api/v1/community/free")
public class FreeBoardController {

    private final FreeBoardService freeBoardService;
    @Autowired
    public FreeBoardController(FreeBoardService freeBoardService) {
        this.freeBoardService = freeBoardService;
    }

    @GetMapping("")
    public List<FreeBoard> boardList() {
        return freeBoardService.getFreeBoardList();
    }

    @PostMapping("")
    public List<FreeBoard> boardWrite(@RequestBody com.ssafy.peace.dto.FreeBoard.Write freeBoard) {
        return freeBoardService.setFreeBoard(freeBoard);
    }

}
