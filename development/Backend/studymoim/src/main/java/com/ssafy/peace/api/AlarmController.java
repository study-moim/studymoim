package com.ssafy.peace.api;

import com.ssafy.peace.dto.AlarmDto;
import com.ssafy.peace.service.AlarmService;
import com.ssafy.peace.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "AlarmController", description = "알람 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/alarm")
public class AlarmController {

    private final AlarmService alarmService;

    @Operation(summary = "get all alarms", description = "모든 알람 불러오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping("/{userId}")
    public ResponseEntity<?> alarmList(@Parameter(description="userId") @PathVariable Integer userId) {
        try{
            return new ResponseEntity<>(alarmService.getAlarmList(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
