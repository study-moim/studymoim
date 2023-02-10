package com.ssafy.peace.api;

import com.ssafy.peace.dto.StudyCommunityDto;
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
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get study list", description = "스터디 목록 정렬해서 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/order/{isDesc}")
    public ResponseEntity<?> studyListIsDesc(@Parameter(description="isDesc") @PathVariable boolean isDesc) {
        try{
            return new ResponseEntity<>(studyService.getStudyListIsDesc(isDesc), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get study list by courseType", description = "특정 카테고리를 포함한 강좌를 가지고 있는 스터디 목록 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("category/{courseCategoryId}")
    public ResponseEntity<?> studyList(@Parameter(description="courseCategoryId") @PathVariable Integer courseCategoryId) {
        try{
            return new ResponseEntity<>(studyService.getStudyListContainCourseCategory(courseCategoryId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
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
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "get study curriculum", description = "스터디 커리큘럼, 진행도 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{studyId}")
    public ResponseEntity<?> studyCurriculumDetail(@Parameter(description="studyId") @PathVariable Integer studyId) {
        try{
            return new ResponseEntity<>(studyService.getStudyDetail(studyId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Operation(summary = "get study History", description = "스터디 히스토리 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{studyId}/studyHistory")
    public ResponseEntity<?> getStudyHistory(@Parameter(description="studyId") @PathVariable Integer studyId) {
        try{
            return new ResponseEntity<>(studyService.getStudyHistory(studyId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
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
            e.printStackTrace();
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
            e.printStackTrace();
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
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "decide request", description = "스터디 가입신청 처리하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PutMapping("/{studyId}/request/{requestId}")
    public ResponseEntity<?> decideRequest(@Parameter(description="studyId") @PathVariable Integer studyId,
                                           @Parameter(description="requestId") @PathVariable Integer requestId,
                                           @RequestBody StudyRequestDto.Decide decide) {
        try{
            studyService.decideRequest(studyId, requestId, decide);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
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
            e.printStackTrace();
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
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "update study", description = "스터디 업데이트하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PutMapping("/{studyId}")
    public ResponseEntity<?> studyUpdate(@Parameter(description="studyId") @PathVariable Integer studyId, @RequestBody StudyDto.Update study) {
        try{
            studyService.updateStudy(studyId, study);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
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
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "update study curriculum", description = "스터디 커리큘럼 업데이트하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PutMapping("/curriculum")
    public ResponseEntity<?> studyCurriculumUpdate(@RequestBody StudyDto.Curriculum curriculum) {
        try{
            studyService.updateStudyCurriculum(curriculum);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Operation(summary = "check study live streaming", description = "스터디 라이브 중인지 확인")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{studyId}/live/recent")
    public ResponseEntity<?> getRecentLecture(@Parameter(description="studyId") @PathVariable Integer studyId) {
        try{
            return new ResponseEntity<>(studyService.getRecentLiveLecture(studyId), HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Operation(summary = "update study live streaming", description = "스터디 라이브 시작")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PutMapping("/{studyId}/live/{status}")
    public ResponseEntity<?> studyLiveUpdate(@Parameter(description="studyId") @PathVariable Integer studyId,
                                             @Parameter(description="status(Enum - start/end)") @PathVariable String status,
                                             @Parameter(description="now playing lecture ID") @RequestParam(required=false) Integer lectureId) {
        try{
            System.out.println("+++++++++++++live++++++++++");
            if(status.equals("start")){
                if(lectureId == null) throw new Exception("No lectureId present. is lectureId exists in request query?");
                studyService.updateLive(studyId, true, lectureId);
            }
            if(status.equals("end")) studyService.updateLive(studyId, false);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
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
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get study community", description = "해당 스터디 커뮤니티 글 가져오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/community/{studyId}")
    public ResponseEntity<?> studyCommunityList(@Parameter(description = "studyId") @PathVariable Integer studyId) {
        try{
            return new ResponseEntity<>(studyService.getStudyCommunityList(studyId), HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "post study community", description = "해당 스터디 글 등록하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/community")
    public ResponseEntity<?> addStudyCommunity(@RequestBody StudyCommunityDto.Make studyCommunityDto) {

        try{
            studyService.addStudyCommunity(studyCommunityDto);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }





}
