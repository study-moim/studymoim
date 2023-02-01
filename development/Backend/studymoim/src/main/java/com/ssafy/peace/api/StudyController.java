package com.ssafy.peace.api;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.entity.Study;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.service.StudyService;
import com.ssafy.peace.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/study")
public class StudyController {

    private final StudyService studyService;


    @Autowired
    public StudyController(StudyService studyService) {
        this.studyService = studyService;
    }

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


    @Operation(summary = "make study", description = "스터디 모집 글 작성하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/")
    public ResponseEntity<?> makeStudy(@RequestBody StudyDto.Make study) {
        try{
            studyService.makeStudy(study);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
