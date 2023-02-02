package com.ssafy.peace.api;

import com.ssafy.peace.dto.FreeBoardCommentDto;
import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.QuestionBoardCommentDto;
import com.ssafy.peace.service.FreeBoardService;
import com.ssafy.peace.service.QuestionBoardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "FreeBoardController", description = "자유 게시글 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/articles/free")
public class FreeBoardController {

    private final FreeBoardService freeBoardService;

    @Operation(summary = "get freeBoard list", description = "자유 게시판 글 목록 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/")
    public ResponseEntity<?> boardList() {
        try{
            return new ResponseEntity<>(freeBoardService.getFreeBoardList(), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "write freeBoard", description = "자유 게시판 글 작성하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/")
    public ResponseEntity<?> boardWrite(@RequestBody FreeBoardDto.Write freeBoard) {
        try{
            freeBoardService.writeFreeBoard(freeBoard);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get freeBoard detail", description = "질문 글 상세 보기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{articleId}")
    public ResponseEntity<?> boardDetail(@Parameter(description="articleId") @PathVariable Integer articleId) {
        try{
            return new ResponseEntity<>(freeBoardService.getfreeBoardDetail(articleId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "wirte comment", description = "질문 게시판 댓글 작성하기")
    @PostMapping("/{articleId}/comment")
    public ResponseEntity<?> writeComment(@Parameter(description="articleId") @PathVariable Integer articleId,
                                          @RequestBody FreeBoardCommentDto.Write comment) {
        try{
            return new ResponseEntity<>(freeBoardService.writeComment(articleId, comment), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get freeBoard detail", description = "질문 글 상세 보기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/search")
    public ResponseEntity<?> boardDetail(@RequestParam(value="key") String key,
                                         @RequestParam(value="word") String word) {
        try{
            if(key.equals("title")) return new ResponseEntity<>(freeBoardService.searchFreeBoardByTitle(word), HttpStatus.OK);
            else if(key.equals("content")) return new ResponseEntity<>(freeBoardService.searchFreeBoardByContent(word), HttpStatus.OK);
            else return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
