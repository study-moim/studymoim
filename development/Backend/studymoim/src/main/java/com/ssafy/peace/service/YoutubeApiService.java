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


    // 추후 키 관리
    private static String requestKey = "AIzaSyBhWMg2moTtilibBevJSI3M9iWUwmkRImQ";
    private static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();
    private static final JsonFactory JSON_FACTORY = new JacksonFactory();
    private static YouTube youtube;


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
    public List<JSONObject> init() {

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
                            .platform(platformRepository.getByPlatformId(1))
                            .build();

                    courseProviderRepository.saveAndFlush(courseProvider);

                    getPlayList(courseProvider.getChannelId());
                } catch (ConstraintViolationException e) {
                    e.printStackTrace();
                    throw new RuntimeException(e);
                }
            }
            return data;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 특정 유저가 올린 강좌 모두 DB에 등록.
     * @param channelId
     * @return
     */
    public List<Playlist> getPlayList(String channelId) {
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



            if(playLists != null) {
                int n = Math.min(playLists.size(), 3);
                for(int i = 0; i < n; i++) {
                    // 데이터 가져오기
                    try{
                        playLists.get(i).getSnippet();
                        Course course = Course.builder()
                                .title(playLists.get(i).getSnippet().getTitle())
                                .content(playLists.get(i).getSnippet().getLocalized().getDescription())
                                .playlistId(playLists.get(i).getId().toString())
                                .thumbnail(playLists.get(i).getSnippet().getThumbnails().getHigh().getUrl())
                                .courseProvider(courseProviderRepository.getByChannelId(channelId))
                                .build();

                        courseRepository.saveAndFlush(course);

                        getPlayListItem(course.getPlaylistId());
                    } catch (ConstraintViolationException e) {
                        e.printStackTrace();
                        throw new RuntimeException(e);
                    }
                }
            }
            return playLists;

        } catch (GoogleJsonResponseException e) {
            System.err.println("There was a service error: " + e.getDetails().getCode() + " : "
                    + e.getDetails().getMessage());
        } catch (IOException e) {
            System.err.println("There was an IO error: " + e.getCause() + " : " + e.getMessage());
        } catch (Throwable t) {
            t.printStackTrace();
        }

        return null;
    }

    /**
     * 강좌에 있는 모든 모든 강의 DB에 기록
     * @param playlistId
     * @return
     */
    public List<PlaylistItem> getPlayListItem(String playlistId) {
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
            if(playListItems != null) {
                int n = Math.min(playListItems.size(), 3);
                for(int i = 0; i < n; i++) {
                    // 데이터 가져오기
                    String videoId = playListItems.get(i).getSnippet().getResourceId().getVideoId();
                    String title = playListItems.get(i).getSnippet().getTitle().toString();
                    String thumbnail = playListItems.get(i).getSnippet().getThumbnails().getHigh().getUrl().toString();

                    // Service -> Service
                    getVideoInfo(playlistId, videoId, title, thumbnail);
                }
            }

            return playListItems;

        } catch (GoogleJsonResponseException e) {
            System.err.println("There was a service error: " + e.getDetails().getCode() + " : "
                    + e.getDetails().getMessage());
        } catch (IOException e) {
            System.err.println("There was an IO error: " + e.getCause() + " : " + e.getMessage());
        } catch (Throwable t) {
            t.printStackTrace();
        }
        return null;
    }

    public List<Video> getVideoInfo(String playlistId, String videoId, String title, String thumbnail) {
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
            if(videos != null) {
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
            return videos;

        } catch (GoogleJsonResponseException e) {
            System.err.println("There was a service error: " + e.getDetails().getCode() + " : "
                    + e.getDetails().getMessage());
        } catch (IOException e) {
            System.err.println("There was an IO error: " + e.getCause() + " : " + e.getMessage());
        } catch (Throwable t) {
            t.printStackTrace();
        }

        return null;
    }

}
