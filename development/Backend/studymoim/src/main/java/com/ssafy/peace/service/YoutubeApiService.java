package com.ssafy.peace.service;

import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;

import com.google.api.services.youtube.model.Playlist;
import com.google.api.services.youtube.model.PlaylistItem;
import com.google.api.services.youtube.model.Video;
import com.ssafy.peace.entity.Course;
import com.ssafy.peace.entity.CourseProvider;
import com.ssafy.peace.entity.Lecture;
import com.ssafy.peace.entity.Platform;
import com.ssafy.peace.repository.CourseProviderRepository;
import com.ssafy.peace.repository.CourseRepository;
import com.ssafy.peace.repository.LectureRepository;
import com.ssafy.peace.repository.PlatformRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.exception.ConstraintViolationException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.util.List;

@Service
@RequiredArgsConstructor
public class YoutubeApiService {

    private final CourseProviderRepository courseProviderRepository;
    private final LectureRepository lectureRepository;
    private final CourseRepository courseRepository;
    private final PlatformRepository platformRepository;
    private final CourseTypeService courseTypeService;


    // 추후 키 관리
    @Value("${youtubeapi.secret}")
    private String requestKey;

    private static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();
    private static final JsonFactory JSON_FACTORY = new JacksonFactory();
    private static YouTube youtube;

    private final int INITNUM = 1;          // 연습용
    private final int LIVENUM = Integer.MAX_VALUE;         // 실전용

    @Data
    class Provider {
        String name;
        String channelId;
    }

    /**
     * provider.json에 등록된 채널 DB에 저장
     * @return
     */
    @Transactional
    public String init(boolean isInit) {
        if(isInit) {

            // platform 유튜브 추가... 추후 여러개 플랫폼 추가하면 json으로?
            try {
                Platform platform = Platform.builder()
                        .name("유튜브")
                        .build();

                platformRepository.saveAndFlush(platform);

            } catch (ConstraintViolationException e) {
                e.printStackTrace();
                throw new RuntimeException(e);
            }

            ClassPathResource classPathResource = new ClassPathResource("provider.json");

            try (InputStream is = new BufferedInputStream(classPathResource.getInputStream())) {

                Object ob = new JSONParser().parse(new InputStreamReader(classPathResource.getInputStream(), "UTF-8"));

                List<JSONObject> data = (List<JSONObject>) ob;

                for (JSONObject provider : data) {
                    try {
                        CourseProvider courseProvider = CourseProvider.builder()
                                .name((String) provider.get("name"))
                                .channelId((String) provider.get("channelId"))
                                .platform(platformRepository.findByName("유튜브"))
                                .build();

                        courseProviderRepository.saveAndFlush(courseProvider);

                        getPlayList(courseProvider.getChannelId(), isInit);
                    } catch (ConstraintViolationException e) {
                        e.printStackTrace();
                        throw new RuntimeException(e);
                    }
                }
                // 모든 강좌, 강의 DB 등록 후, 모든 강좌에 태그 달아주기
                courseTypeService.insertCourseType();
                return "ok";
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        } else {
            // Init 아니고 실제 데이터 추가
            List<CourseProvider> courseProviderList = courseProviderRepository.findAll();
            for (int i = 0; i < courseProviderList.size(); i++) {
                getPlayList(courseProviderList.get(i).getChannelId(), isInit);
            }
            // 모든 강좌, 강의 DB 등록 후, 모든 강좌에 태그 달아주기
            courseTypeService.insertCourseType();
            return "ok";
        }
    }

    /**
     * 특정 채널이 올린 강좌 모두 DB에 등록.
     * @param channelId
     * @return
     */
    public void getPlayList(String channelId, boolean isInit) {
        try {
            youtube = new YouTube.Builder(HTTP_TRANSPORT, JSON_FACTORY, new HttpRequestInitializer() {
                public void initialize(HttpRequest request) throws IOException {
                }
            }).setApplicationName("youtube-playlist-get").build();

            YouTube.Playlists.List playlistRequest =
                    youtube.playlists().list("id,contentDetails,snippet");
            playlistRequest.setKey(requestKey);
            playlistRequest.setChannelId(channelId);
            playlistRequest.setMaxResults(1000l);
            List<Playlist> playLists = playlistRequest.execute().getItems();

            if(!playLists.isEmpty()) {
                if(isInit == true) {
                    int n = Math.min(playLists.size(), INITNUM);
                    for (int i = 0; i < n; i++) {
                        // 데이터 가져오기
                        try {
                            playLists.get(i).getSnippet();
                            Course course = Course.builder()
                                    .title(playLists.get(i).getSnippet().getTitle())
                                    .content(playLists.get(i).getSnippet().getLocalized().getDescription())
                                    .playlistId(playLists.get(i).getId().toString())
                                    .thumbnail(playLists.get(i).getSnippet().getThumbnails().getHigh().getUrl())
//                                    .thumbnail(playLists.get(i).getSnippet().getThumbnails().getDefault().getUrl())
                                    .courseProvider(courseProviderRepository.getByChannelId(channelId))
                                    .build();

                            courseRepository.saveAndFlush(course);

                            getPlayListItem(course.getPlaylistId(), isInit);
                        } catch (ConstraintViolationException e) {
                            e.printStackTrace();
                            throw new RuntimeException(e);
                        }
                    }
                } else {
                    // 추가 데이터
                    int n = Math.min(playLists.size(), LIVENUM);
                    for (int i = INITNUM; i < n; i++) {
                        // 데이터 가져오기
                        try {
                            playLists.get(i).getSnippet();
                            Course course;
                            if(playLists.get(i).getSnippet().getThumbnails().isEmpty()) {
                                course = Course.builder()
                                        .title(playLists.get(i).getSnippet().getTitle())
                                        .content(playLists.get(i).getSnippet().getLocalized().getDescription())
                                        .playlistId(playLists.get(i).getId().toString())
//                                    .thumbnail(playLists.get(i).getSnippet().getThumbnails().getHigh().getUrl())
                                        .thumbnail(null)
                                        .courseProvider(courseProviderRepository.getByChannelId(channelId))
                                        .build();
                            } else {
                                course = Course.builder()
                                        .title(playLists.get(i).getSnippet().getTitle())
                                        .content(playLists.get(i).getSnippet().getLocalized().getDescription())
                                        .playlistId(playLists.get(i).getId().toString())
                                        .thumbnail(playLists.get(i).getSnippet().getThumbnails().getHigh().getUrl())
//                                        .thumbnail(playLists.get(i).getSnippet().getThumbnails().getDefault().getUrl())
                                        .courseProvider(courseProviderRepository.getByChannelId(channelId))
                                        .build();
                            }
                            courseRepository.saveAndFlush(course);

                            getPlayListItem(course.getPlaylistId(), isInit);
                        } catch (ConstraintViolationException e) {
                            e.printStackTrace();
                            throw new RuntimeException(e);
                        }
                    }
                }
            }

        } catch (GoogleJsonResponseException e) {
            System.err.println("There was a service error: " + e.getDetails().getCode() + " : "
                    + e.getDetails().getMessage());
        } catch (IOException e) {
            System.err.println("There was an IO error: " + e.getCause() + " : " + e.getMessage());
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    /**
     * 강좌에 있는 모든 모든 강의 DB에 기록
     * @param playlistId
     * @return
     */
    public void getPlayListItem(String playlistId, boolean isInit) {
        try {
            youtube = new YouTube.Builder(HTTP_TRANSPORT, JSON_FACTORY, new HttpRequestInitializer() {
                public void initialize(HttpRequest request) throws IOException {
                }
            }).setApplicationName("youtube-playlistItem-get").build();

            YouTube.PlaylistItems.List playlistItemRequest =
                    youtube.playlistItems().list("id,contentDetails,snippet");
            playlistItemRequest.setKey(requestKey);
            playlistItemRequest.setPlaylistId(playlistId);
            playlistItemRequest.setMaxResults(100l);
            List<PlaylistItem> playListItems = playlistItemRequest.execute().getItems();
            if(!playListItems.isEmpty()) {
//                if (isInit == true) {
//                    int n = Math.min(playListItems.size(), INITNUM);
//                    for (int i = 0; i < n; i++) {
//                        // 데이터 가져오기
//                        String videoId = playListItems.get(i).getSnippet().getResourceId().getVideoId();
//                        String title = playListItems.get(i).getSnippet().getTitle().toString();
//                        String thumbnail = playListItems.get(i).getSnippet().getThumbnails().getHigh().getUrl().toString();
////                        String thumbnail = playListItems.get(i).getSnippet().getThumbnails().getDefault().getUrl().toString();
//
//                        // Service -> Service
//                        getVideoInfo(playlistId, videoId, title, thumbnail);
//                    }
//                } else {
                int n = playListItems.size();
                for (int i = INITNUM; i < n; i++) {
                    // 데이터 가져오기
                    String thumbnail;
                    String videoId = playListItems.get(i).getSnippet().getResourceId().getVideoId();
                    String title = playListItems.get(i).getSnippet().getTitle().toString();
                    if(playListItems.get(i).getSnippet().getThumbnails().isEmpty()) {
                        thumbnail = null;
                    } else {

                        thumbnail = playListItems.get(i).getSnippet().getThumbnails().getHigh().getUrl().toString();
//                            thumbnail = playListItems.get(i).getSnippet().getThumbnails().getDefault().getUrl().toString();
                    }
                    // Service -> Service
                    getVideoInfo(playlistId, videoId, title, thumbnail);

//                    }
                }
            }
        } catch (GoogleJsonResponseException e) {
            System.err.println("There was a service error: " + e.getDetails().getCode() + " : "
                    + e.getDetails().getMessage());
        } catch (IOException e) {
            System.err.println("There was an IO error: " + e.getCause() + " : " + e.getMessage());
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    public void getVideoInfo(String playlistId, String videoId, String title, String thumbnail) {
        try {
            youtube = new YouTube.Builder(HTTP_TRANSPORT, JSON_FACTORY, new HttpRequestInitializer() {
                public void initialize(HttpRequest request) throws IOException {
                }
            }).setApplicationName("youtube-video-get").build();

            YouTube.Videos.List videoRequest =
                    youtube.videos().list("id,contentDetails,snippet,contentDetails");

            videoRequest.setKey(requestKey);
            videoRequest.setId(videoId);
            videoRequest.setMaxResults(10l);
            List<Video> videos = videoRequest.execute().getItems();
            if(!videos.isEmpty()) {
                // 예시 : PT2M26S, PT10M26S, PT1H37M28S
                String timeString = videos.get(0).getContentDetails().getDuration().toString();
                String[] timeArray = timeString.substring(2).replaceAll("[^\\d]", " ").split(" ");
                int time = 0;
                if(timeArray.length == 3) {
                    time = Integer.parseInt(timeArray[0])*3600 + Integer.parseInt(timeArray[1])*60 + Integer.parseInt(timeArray[2]);
                } else if(timeArray.length == 2) {
                    time = Integer.parseInt(timeArray[0])*60 + Integer.parseInt(timeArray[1]);
                } else {
                    time = Integer.parseInt(timeArray[0]);
                }

                try {
                    // lecture 추가
                    Lecture lecture = Lecture.builder()
                            .title(title)
                            .length(time)
                            .thumbnail(thumbnail)
                            .content(videos.get(0).getSnippet().getDescription().toString())
                            .videoId(videoId)
                            .course(courseRepository.getByPlaylistId(playlistId))
                            .build();

                    lectureRepository.saveAndFlush(lecture);
                } catch (ConstraintViolationException e) {
                    e.printStackTrace();
                    throw new RuntimeException(e);
                }
            }
        } catch (GoogleJsonResponseException e) {
            System.err.println("There was a service error: " + e.getDetails().getCode() + " : "
                    + e.getDetails().getMessage());
        } catch (IOException e) {
            System.err.println("There was an IO error: " + e.getCause() + " : " + e.getMessage());
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

}
