package com.ssafy.peace.api;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.QuestionBoardCommentDto;
import com.ssafy.peace.dto.QuestionBoardDto;
import com.ssafy.peace.entity.QuestionBoard;
import com.ssafy.peace.service.QuestionBoardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "QuestionBoardController", description = "질문 게시글 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/articles/question")
public class QuestionBoardController {

    private final QuestionBoardService questionBoardService;

    @Operation(summary = "get questionBoard list", description = "질문 게시판 글 목록 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/")
    public ResponseEntity<?> boardList(@PageableDefault(size=10, sort = "questionxBoardId", direction = Sort.Direction.DESC) Pageable pageable) {
        try{
            return new ResponseEntity<>(questionBoardService.getQuestionBoardList(pageable), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "post questionBoard", description = "질문 게시판 글 작성 및 수정하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/")
    public ResponseEntity<?> boardWrite(@RequestBody QuestionBoardDto.Write questionBoard) {
        try{
            questionBoardService.writeQuestion(questionBoard);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "post questionBoard", description = "질문 게시판 글 작성 및 수정하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PutMapping("/{articleId}")
    public ResponseEntity<?> boardUpdate(@Parameter(description="articleId") @PathVariable Integer articleId,
                                         @RequestBody QuestionBoardDto.Write questionBoard) {
        try{
            questionBoardService.updateQuestion(articleId, questionBoard);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "post questionBoard", description = "질문 게시판 글 작성 및 수정하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @DeleteMapping("/{articleId}")
    public ResponseEntity<?> boardDelete(@Parameter(description="articleId") @RequestBody Integer articleId) {
        try{
            questionBoardService.deleteQuestion(articleId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get questionBoard detail", description = "질문 글 상세 보기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{articleId}")
    public ResponseEntity<?> boardDetail(@Parameter(description="articleId") @PathVariable Integer articleId) {
        try{
            return new ResponseEntity<>(questionBoardService.getQuestionBoardDetail(articleId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "post questionBoard comment", description = "질문 게시판 댓글 작성하기")
    @PostMapping("/comment")
    public ResponseEntity<?> writeComment(@RequestBody QuestionBoardCommentDto.Write comment) {
        try{
            return new ResponseEntity<>(questionBoardService.writeComment(comment), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "delete questionBoard comment", description = "질문 게시판 댓글 삭제하기")
    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<?> deleteComment(@Parameter(description="commentId") @PathVariable Integer commentId) {
        try{
            return new ResponseEntity<>(questionBoardService.deleteComment(commentId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "questionBoard in Now Play page", description = "질문 게시판 댓글 작성하기")
    @GetMapping("/lecture/{lectureId}")
    public ResponseEntity<?> writeCommentInPlayer(@Parameter(description="lectureId") @PathVariable Integer lectureId) {
        try{
            return new ResponseEntity<>(questionBoardService.getQuestionBoardListByLecture(lectureId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
