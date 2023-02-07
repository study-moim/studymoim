package com.ssafy.peace.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobInfo;
//import com.ssafy.peace.dto.DownloadReqDto;
import com.ssafy.peace.dto.UploadReqDto;
import com.ssafy.peace.service.GCSService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.mapper.Mapper;
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

    private final GCSService gcsService;
//    @Operation(summary = "gcs download", description = "gcs test")
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })
//    @PostMapping("/download")
//    public ResponseEntity localDownloadFromStorage(@RequestBody DownloadReqDto downloadReqDto){
//        Blob fileFromGCS = gcsService.downloadFileFromGCS(downloadReqDto);
//        return ResponseEntity.ok(fileFromGCS.toString());
//    }

//    @Operation(summary = "gcs upload", description = "gcs test")
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })
//    @PostMapping("/upload")
//    public ResponseEntity localUploadToStorage(@RequestBody UploadReqDto uploadReqDto) throws IOException {
//        BlobInfo fileFromGCS = gcsService.uploadFileToGCS(uploadReqDto);
//        return ResponseEntity.ok(fileFromGCS.toString());
//    }
    @Operation(summary = "gcs upload", description = "gcs test")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/test")
    public ResponseEntity test(@RequestPart(value = "file") MultipartFile file,
                                      @RequestPart(value = "dto") UploadReqDto uploadReqDto) throws IOException {
        System.out.println("?????????????????????????");
        System.out.println(file);
        String fileFromGCS = gcsService.uploadProfileImage(file, uploadReqDto);
        return ResponseEntity.ok(fileFromGCS);
    }
    @Operation(summary = "gcs upload", description = "gcs test")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/upload")
    public ResponseEntity<?> uploadToGCS(@RequestParam("file") MultipartFile file,
                               @RequestParam("dto") String dto) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        UploadReqDto uploadReqDto = mapper.readValue(dto, UploadReqDto.class);
        return new ResponseEntity<>(gcsService.uploadProfileImage(file, uploadReqDto), HttpStatus.OK);
    }
    @Operation(summary = "gcs download", description = "gcs test")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @GetMapping ("/test/{saveName}")
    public ResponseEntity<?> getFromGCS(@Parameter(description="saveName") @PathVariable String saveName) throws IOException {
        System.out.println("?????????????????????????");
        Blob blob = gcsService.getProfileImage(saveName);
        System.out.println("blob = " + blob);
        return new ResponseEntity<>(blob.toString(), HttpStatus.OK);
    }

}
