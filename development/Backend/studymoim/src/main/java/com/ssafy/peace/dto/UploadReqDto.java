package com.ssafy.peace.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@Getter
public class UploadReqDto {

    private int userId;
    private String fileName;
}