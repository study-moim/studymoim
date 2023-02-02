package com.ssafy.peace.api;

import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.dto.StudyMemberDto;
import com.ssafy.peace.dto.StudyRequestDto;
import com.ssafy.peace.service.StudyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "StudyController", description = "스터디 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/study")
public class StudyController {

    private final StudyService studyService;

    @Operation(summary = "get study list", description = "스터디 목록 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/")
    public ResponseEntity<?> studyList() {
        try{
            return new ResponseEntity<>(studyService.getStudyList(), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get study Detail", description = "스터디 상세 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{studyId}")
    public ResponseEntity<?> studyDetail(@Parameter(description="studyId") @PathVariable Integer studyId) {
        try{
            return new ResponseEntity<>(studyService.getStudyDetail(studyId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get study History", description = "스터디 히스토리 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{studyId}/studyHistory")
    public ResponseEntity<?> studyHistory(@Parameter(description="studyId") @PathVariable Integer studyId) {
        try{
            return new ResponseEntity<>(studyService.getStudyHistory(studyId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "participate study", description = "스터디 가입하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/{studyId}/participate")
    public ResponseEntity<?> studyParticipate(@Parameter(description="studyId") @PathVariable Integer studyId, @RequestBody StudyMemberDto.Participate studyMember) {
        try{
            studyService.participateStudy(studyId, studyMember);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get request list", description = "스터디 가입 신청 리스트")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{studyId}/request")
    public ResponseEntity<?> getStudyRequestList(@Parameter(description="studyId") @PathVariable Integer studyId) {
        try{
            return new ResponseEntity<>(studyService.getRequest(studyId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "request study", description = "스터디 가입신청하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/{studyId}/request")
    public ResponseEntity<?> studyRequest(@Parameter(description="studyId") @PathVariable Integer studyId, @RequestBody StudyRequestDto.Request request) {
        try{
            studyService.requestStudy(studyId, request);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "decide request", description = "스터디 가입신청 처리하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    //그럼 이거도??
//    @PutMapping("/{studyId}/request/{userId}")
    @PutMapping("/{studyId}/request/{requestId}")
    public ResponseEntity<?> decideRequest(@Parameter(description="studyId") @PathVariable Integer studyId,
                                           @Parameter(description="requestId") @PathVariable Integer requestId,
                                           @RequestBody StudyRequestDto.Decide decide) {
        try{
            studyService.decideRequest(studyId, requestId, decide);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @Operation(summary = "ban user from study", description = "스터디에서 유저 밴하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    // 이러면 안되나?
    @PutMapping("/{studyId}/ban/{userId}")
    public ResponseEntity<?> studyBanUser(@Parameter(description="studyId") @PathVariable Integer studyId,
                                          @Parameter(description="userId") @PathVariable Integer userId) {
        try{
            studyService.banUserFromStudy(studyId, userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @Operation(summary = "make study", description = "스터디 모집 글 작성하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/")
    public ResponseEntity<?> studyMake(@RequestBody StudyDto.Make study) {
        try{
            studyService.makeStudy(study);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "update study", description = "스터디 업데이트하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PutMapping("/{studyId}")
    public ResponseEntity<?> studyUpdate(@Parameter(description="studyId") @PathVariable Integer studyId, @RequestBody StudyDto.Make study) {
        try{
            studyService.updateStudy(studyId, study);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "update study notice", description = "스터디 공지 업데이트하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PutMapping("/{studyId}/notice")
    public ResponseEntity<?> studyNoticeUpdate(@Parameter(description="studyId") @PathVariable Integer studyId, @RequestBody StudyDto.Notice notice) {
        try{
            studyService.updateNotice(studyId, notice);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "find study", description = "스터디 제목으로 찾기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/search/{searchText}")
    public ResponseEntity<?> studyFind(@Parameter(description = "searchText") @PathVariable String searchText) {
        try{
            return new ResponseEntity<>(studyService.getStudyInfoListFindByName(searchText), HttpStatus.ACCEPTED);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
