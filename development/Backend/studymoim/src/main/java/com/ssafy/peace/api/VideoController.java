package com.ssafy.peace.api;

import com.ssafy.peace.dto.StudyMemberDto;
import com.ssafy.peace.service.VideoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "VideoController", description = "영상 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/video")
public class VideoController {

    private final VideoService videoService;

    // 개인이 볼때 -> userId, lectureId
    // 스터디에서 볼때 -> studyId, lectureId

    // 영상 보기 시작할 때
    @Operation(summary = "add user history", description = "개인 강의 시작, 히스토리 등록")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/user/{userId}/{lectureId}")
    public ResponseEntity<?> addUserHistory(@Parameter(description="userId") @PathVariable Integer userId, @Parameter(description="lectureId") @PathVariable Integer lectureId) {
        try{
            return new ResponseEntity<>(videoService.getStartTimeForUser(userId, lectureId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "add study history", description = "스터디 강의 시작, 히스토리 등록")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/study/{studyId}/{lectureId}")
    public ResponseEntity<?> addStudyHistory(@Parameter(description="studyId") @PathVariable Integer studyId, @Parameter(description="lectureId") @PathVariable Integer lectureId) {
        try{
            return new ResponseEntity<>(videoService.getStartTimeForStudy(studyId, lectureId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
