package com.ssafy.peace.api;

import com.ssafy.peace.dto.UserDto;
import com.ssafy.peace.entity.CourseCategory;
import com.ssafy.peace.service.CourseCategoryService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ExampleProperty;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    @PostMapping("/like")
    public ResponseEntity<?> followCategory(@RequestBody HashMap<String, Object> map) {
        try{
            courseCategoryService.updateCategoryLikes(Integer.parseInt((String) map.get("userId")), (List<Integer>) map.get("categories"));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
