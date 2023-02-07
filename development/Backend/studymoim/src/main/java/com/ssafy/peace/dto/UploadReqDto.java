package com.ssafy.peace.dto;

import com.google.cloud.storage.Blob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class UploadReqDto {

    private int userId;
    private String fileName;
}