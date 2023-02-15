package com.ssafy.peace.api;


import com.ssafy.peace.service.CourseService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/course")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @Operation(summary = "get course list", description = "강의 목록 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("")
    public ResponseEntity<?> courseInfoList(
            Pageable pageable) {
        try{
            return new ResponseEntity<>(courseService.getCourseInfoListFindAll(pageable), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get course detail", description = "선택한 카테고리에 속한 강좌 목록")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/category/{courseCategoryId}")
    public ResponseEntity<?> courseInfoListCourseCategoryId(@Parameter(description = "courseCategoryId") @PathVariable int courseCategoryId,
                                                            Pageable pageable) {
        try{
            return new ResponseEntity<>(courseService.courseInfoListCourseCategoryId(courseCategoryId, pageable), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get course list", description = "검색한 강의 목록 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/search/{searchText}")
    public ResponseEntity<?> courseInfoList(@Parameter(description = "searchText") @PathVariable String searchText) {
        try{
            return new ResponseEntity<>(courseService.getCourseInfoListFindByName(searchText), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "get course detail", description = "선택한 강의 상세 정보")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{courseId}")
    public ResponseEntity<?> courseRecruit(@Parameter(description = "courseId") @PathVariable int courseId) {
        try{
            return new ResponseEntity<>(courseService.getCourseRecruit(courseId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "post user like course", description = "유저의 특정 강좌 좋아요 추가하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{courseId}/{userId}")
    public ResponseEntity<?> getUserLikeCourse( @Parameter(description = "userId") @PathVariable int userId, @Parameter(description = "courseId") @PathVariable int courseId) {
        try{
            return new ResponseEntity<>(courseService.getUserLikeCourse(userId, courseId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "post user like course", description = "유저의 특정 강좌 좋아요 추가하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/{courseId}/{userId}")
    public ResponseEntity<?> postUserLikeCourse( @Parameter(description = "userId") @PathVariable int userId, @Parameter(description = "courseId") @PathVariable int courseId) {
        try{
            courseService.postUserLikeCourse(userId, courseId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "update user like course", description = "유저가 강좌 좋아요 업데이트")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @DeleteMapping("/{courseId}/{userId}")
    public ResponseEntity<?> deleteUserLikeCourse( @Parameter(description = "userId") @PathVariable int userId, @Parameter(description = "courseId") @PathVariable int courseId) {
        try{
            courseService.deleteUserLikeCourse(userId, courseId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @Operation(summary = "get studies attending course", description = "선택한 강의를 듣고 있는 스터디")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{courseId}/study_list")
    public ResponseEntity<?> courseAttendingStudies(@Parameter(description = "courseId") @PathVariable Integer courseId,
                                                    Pageable pageable) {
        try{
            return new ResponseEntity<>(courseService.getStudyAttendingCourse(courseId, pageable), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
