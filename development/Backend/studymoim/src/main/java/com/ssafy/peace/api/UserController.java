package com.ssafy.peace.api;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.UserDto;
import com.ssafy.peace.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "get user list", description = "사용자 목록 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/")
    public ResponseEntity<?> userList() {
        try{
//            return new ResponseEntity<>(userService.getUserList(), HttpStatus.OK);
            return new ResponseEntity<>("", HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "post user", description = "사용자 회원가입 DB 적용하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/")
    public ResponseEntity<?> userRegister(@RequestBody UserDto.Register register) {

        //TODO : 서연아 화이팅
        return null;
    }

    @Operation(summary = "user information", description = "사용자 정보")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}")
    public ResponseEntity<?> userInfo(@PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.getUserInfo(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get study list", description = "사용자가 참여중인 스터디 목록 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/studies")
    public ResponseEntity<?> userStudyList(@PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.getStudyList(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get course list", description = "강좌 수강 내역 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/courses")
    public ResponseEntity<?> userCourseHistoryList(@PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.getCourseHistory(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get lecture list", description = "강의 수강 내역 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/lectures")
    public ResponseEntity<?> userLectureHistoryList(@PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.getLectureHistory(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get memos", description = "사용자 메모 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/memos")
    public ResponseEntity<?> userMemoList(@PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.getMemoList(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get posting list", description = "작성한 글 내역 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/posts")
    public ResponseEntity<?> userPostingList(@PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.getPostList(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get like list", description = "좋아요 한 강좌 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/likes")
    public ResponseEntity<?> userLikeList(@PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.getLikeList(), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
