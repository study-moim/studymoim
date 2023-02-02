package com.ssafy.peace.api;

import com.ssafy.peace.dto.UserDto;
import com.ssafy.peace.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@AllArgsConstructor
public class UserController {
    private final UserService userService;

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

    @Operation(summary = "user information", description = "사용자 정보")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}")
    public ResponseEntity<?> userInfo(@Parameter(description="userId") @PathVariable Integer userId) {
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
    public ResponseEntity<?> userStudyList(@Parameter(description="userId") @PathVariable Integer userId) {
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
    public ResponseEntity<?> userCourseHistoryList(@Parameter(description="userId") @PathVariable Integer userId) {
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
    public ResponseEntity<?> userLectureHistoryList(@Parameter(description="userId") @PathVariable Integer userId) {
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
    public ResponseEntity<?> userMemoList(@Parameter(description = "userId") @PathVariable Integer userId) {
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
    @GetMapping("/{userId}/articles")
    public ResponseEntity<?> userPostingList(@Parameter(description="userId") @PathVariable Integer userId) {
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
    public ResponseEntity<?> userLikeList(@Parameter(description="userId") @PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.getLikeList(), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "count followers", description = "팔로워 개수 조회하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/follower")
    public ResponseEntity<?> getFollowersCount(@Parameter(description="userId") @PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.countFollowers(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "count followings", description = "팔로잉 개수 조회하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/following")
    public ResponseEntity<?> getfollowingsCount(@Parameter(description="userId") @PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.countFollowings(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "follow user", description = "사용자 팔로우하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "406", description = "ALREADY FOLLOWING"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/follow/{targetId}")
    public ResponseEntity<?> followUser(@Parameter(description="userId") @PathVariable Integer userId,
                                        @Parameter(description="targetId") @PathVariable Integer targetId) {
        try{
            UserDto.Info result = userService.followUser(userId, targetId);
            if(result == null) return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "unfollow user", description = "사용자 언팔로우하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "406", description = "ALREADY UNFOLLOWING"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/unfollow/{targetId}")
    public ResponseEntity<?> unfollowUser(@Parameter(description="userId") @PathVariable Integer userId,
                                          @Parameter(description="userId") @PathVariable Integer targetId) {
        try{
            UserDto.Info result = userService.unfollowUser(userId, targetId);
            if(result == null) return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "check uncheckd alarms", description = "사용자 미확인 알람 여부 확인")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/check/alarm")
    public ResponseEntity<?> userExistUncheckdAlarm(@Parameter(description = "userId") @PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.existUncheckdAlarm(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get alarms", description = "사용자 알람 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}/alarms")
    public ResponseEntity<?> userUncheckedAlarmList(@Parameter(description = "userId") @PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(userService.getAlarmList(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "is exist uncheckd message", description = "사용자 미확인 쪽지 존재 여부 확인")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{toUserId}/check/message")
    public ResponseEntity<?> userExistUncheckdMessage(@Parameter(description = "toUserId") @PathVariable Integer toUserId) {
        try{
            return new ResponseEntity<>(userService.existUncheckdMessage(toUserId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get message User List", description = "사용자와 쪽지를 한 유저 리스트")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{toUserId}/message")
    public ResponseEntity<?> userMessageList(@Parameter(description = "toUserId") @PathVariable Integer toUserId) {
        try{
            return new ResponseEntity<>(userService.getMessageUserList(toUserId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get message", description = "특정 사용자와 나눈 쪽지 내역 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{toUserId}/message/history/{fromUserId}")
    public ResponseEntity<?> userMessageHistory(@Parameter(description = "toUserId") @PathVariable Integer toUserId,
                                                    @Parameter(description = "fromUserID") @PathVariable Integer fromUserId) {
        try{
            return new ResponseEntity<>(userService.getMessageHistory(toUserId, fromUserId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
