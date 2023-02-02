package com.ssafy.peace.api;

import com.ssafy.peace.dto.UserDto;
import com.ssafy.peace.entity.CourseCategory;
import com.ssafy.peace.service.CourseCategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "CourseCategoryController", description = "강좌 태그 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/category")
public class CourseCategoryController {

    private final CourseCategoryService courseCategoryService;

    @Operation(summary = "get category list", description = "강좌 태그 목록 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/")
    public ResponseEntity<?> categoryList() {
        try{
            return new ResponseEntity<>(courseCategoryService.getCategoryList(), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "like category", description = "강좌 태그 즐겨찾기 등록하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/{categoryId}/like")
    public ResponseEntity<?> followCategory(@Parameter(description="categoryId") @PathVariable Integer categoryId,
                                            @RequestBody UserDto.Id userId) {
        try{
            courseCategoryService.followCategory(categoryId, userId.getUserId());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "cancel like category", description = "강좌 태그 즐겨찾기 등록하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @DeleteMapping("/{categoryId}/unlike")
    public ResponseEntity<?> unfollowCategory(@Parameter(description="categoryId") @PathVariable Integer categoryId,
                                              @RequestBody UserDto.Id userId) {
        try{
            courseCategoryService.unfollowCategory(categoryId, userId.getUserId());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
