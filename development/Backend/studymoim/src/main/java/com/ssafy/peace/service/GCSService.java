package com.ssafy.peace.service;

import com.google.cloud.storage.*;
//import com.ssafy.peace.dto.DownloadReqDto;
import com.ssafy.peace.dto.UploadReqDto;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GCSService {

    private final Storage storage;
    private final UserRepository userRepository;

    @SuppressWarnings("deprecation")
    @Transactional
    public String uploadProfileImage(MultipartFile file, UploadReqDto uploadReqDto) throws IOException {
        User user = userRepository.findById(uploadReqDto.getUserId()).get();
        int userId = uploadReqDto.getUserId();
        String bucketName = "studymoim";
        String saveFileName = UUID.randomUUID().toString() + StringUtils.cleanPath(file.getOriginalFilename());
        System.out.println("uploadFileName = " + saveFileName);
        try(InputStream inputStream = file.getInputStream()) {
            Image processedImage = ImageIO.read(inputStream);

            BufferedImage scaledBI = new BufferedImage(200, 200, BufferedImage.TYPE_INT_RGB);
            Graphics2D g = scaledBI.createGraphics();
            g.drawImage(processedImage, 0, 0, 200, 200, null);
            g.dispose();

            ByteArrayOutputStream os = new ByteArrayOutputStream();
            ImageIO.write(scaledBI, "jpg", os);

            InputStream processedInputStream = new ByteArrayInputStream(os.toByteArray());

            storage.create(BlobInfo.newBuilder(bucketName, saveFileName).build(), processedInputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println(user.getSaveName());
        userRepository.findById(uploadReqDto.getUserId()).get().updateSaveName(saveFileName);
        System.out.println(user.getSaveName());
        String result = "/" + saveFileName;
        return result;
    }

    public Blob getImage(String saveName) {
        Blob blob = storage.get("studymoim", saveName);
        return blob;
    }
}