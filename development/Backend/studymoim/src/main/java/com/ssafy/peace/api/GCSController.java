package com.ssafy.peace.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.cloud.storage.Blob;
//import com.ssafy.peace.dto.DownloadReqDto;
import com.ssafy.peace.dto.UploadReqDto;
import com.ssafy.peace.service.GCSService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Tag(name = "GCSController", description = "gcs API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gcs")
public class GCSController {
//
//    private final GCSService gcsService;
//    @PostMapping("/upload")
//    public ResponseEntity<?> uploadToGCS(@RequestParam("file") MultipartFile file,
//                               @RequestParam("dto") String dto) throws IOException {
//        ObjectMapper mapper = new ObjectMapper();
//        UploadReqDto uploadReqDto = mapper.readValue(dto, UploadReqDto.class);
//        return null;
////        return new ResponseEntity<>(gcsService.uploadProfileImage(file, uploadReqDto), HttpStatus.OK);
//    }
//    @Operation(summary = "gcs download", description = "gcs test")
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })
//    @GetMapping ("/test/{saveName}")
//    public ResponseEntity<?> getFromGCS(@Parameter(description="saveName") @PathVariable String saveName) throws IOException {
//        Blob blob = gcsService.getImage(saveName);
//        return new ResponseEntity<>(blob.toString(), HttpStatus.OK);
//    }

}
