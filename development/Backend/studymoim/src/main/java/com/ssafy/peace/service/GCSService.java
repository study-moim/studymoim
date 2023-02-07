package com.ssafy.peace.service;

import com.google.auth.oauth2.GoogleCredentials;
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
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GCSService {

    private final Storage storage;
    private final UserRepository userRepository;

    private final MultipartHttpServletRequest multipartHttpServletRequest;

    public void testGCS(MultipartFile multipartFile, UploadReqDto uploadReqDto) {
        User user = userRepository.findById(uploadReqDto.getUserId()).get();

        try {
            String seper = File.separator;
            String today = new SimpleDateFormat("yyMMdd").format(new Date());
            String bucketName = "studymoim";
            File file = new File("");
            String rootPath = file.getAbsolutePath().split("src")[0];

            String savePath = rootPath + seper + "profileImg" + seper + today;
            if(!new File(savePath).exists()){
                try {
                    new File(savePath).mkdirs();
                } catch (Exception e){
                    e.printStackTrace();
                }
            }

            String originalFileName = multipartFile.getOriginalFilename();
            String saveFileName = UUID.randomUUID().toString() + originalFileName.substring(originalFileName.lastIndexOf("."));
            String filePath = savePath + seper + saveFileName;
            multipartFile.transferTo(new File(filePath));
//            return userRepository.

        } catch (Exception e){
            e.printStackTrace();


        }

//        ByteArrayOutputStream os = new ByteArrayOutputStream();
//        InputStream processedInputStream = new ByteArrayInputStream(os.toByteArray());
//        BlobInfo blobInfo =storage.create(
//                BlobInfo.newBuilder(bucketName, file.getName())
//                        .setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllAuthenticatedUsers(), Acl.Role.READER))))
//                        .build(), processedInputStream);

        // GCS 자체 지원으로 폴더 추가할때 로직 필요 없음

    }

//    public Blob downloadFileFromGCS(DownloadReqDto downloadReqDto) {
//        Blob blob = storage.get(downloadReqDto.getBucketName(), downloadReqDto.getDownloadFileName());
//        blob.downloadTo(Paths.get(downloadReqDto.getLocalFileLocation()));
//        return blob;
//    }

    @SuppressWarnings("deprecation")
    public BlobInfo uploadFileToGCS(UploadReqDto uploadReqDto) throws IOException {

//        BlobInfo blobInfo =storage.create(
//                BlobInfo.newBuilder(uploadReqDto.getBucketName(), uploadReqDto.getUploadFileName())
//                        .setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllAuthenticatedUsers(), Acl.Role.READER))))
//                        .build(),
//                new FileInputStream(uploadReqDto.getLocalFileLocation()));
//
//        return blobInfo;
        return null;
    }

    @SuppressWarnings("deprecation")
    @Transactional
    public String test(MultipartFile file, UploadReqDto uploadReqDto) throws IOException {
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

    public Blob getProfileImage(String saveName) {
        Blob blob = storage.get("studymoim", saveName);
        return blob;
    }
}