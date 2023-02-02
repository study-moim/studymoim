package com.ssafy.peace.api;


import com.ssafy.peace.dto.NoteDto;
import com.ssafy.peace.entity.Note;
import com.ssafy.peace.service.LectureService;
import com.ssafy.peace.service.NoteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/note")
@RequiredArgsConstructor
public class NoteController {

    private final NoteService noteService;

    @Operation(summary = "get note", description = "유저, 강의로 Note 가져오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{lectureId}/{userId}")
    public ResponseEntity<?> NoteByLectureIdByuserId(@Parameter(description = "lectureId") @PathVariable int lectureId, @Parameter(description = "userId") @PathVariable int userId) {
        try{
            return new ResponseEntity<>(noteService.getNoteByLectureIdByuserId(lectureId, userId), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
