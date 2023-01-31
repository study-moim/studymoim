package com.ssafy.peace.api;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.dto.StudyDto;
import com.ssafy.peace.entity.Study;
import com.ssafy.peace.service.StudyService;
import com.ssafy.peace.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
