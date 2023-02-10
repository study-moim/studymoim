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

    @SuppressWarnings("deprecation")
    @Transactional
    public String uploadProfileImage(MultipartFile file, User user) throws IOException {
        String bucketName = "studymoim";
        String saveFileName = UUID.randomUUID() + StringUtils.cleanPath(file.getOriginalFilename());
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

        user.updateSaveName(saveFileName);
        String result = "/" + saveFileName;
        return result;
    }
//    // 사진 가져오기
//    public Blob getImage(String saveName) {
//        Blob blob = storage.get("studymoim", saveName);
//        return blob;
//    }
}