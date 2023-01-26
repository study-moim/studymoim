package com.ssafy.peace.service;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import com.ssafy.peace.repository.CourseProviderRepository;
import com.ssafy.peace.repository.CourseRepository;
import com.ssafy.peace.repository.LectureRepository;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class YoutubeApiService {

    private final CourseProviderRepository courseProviderRepository;
    private final LectureRepository lectureRepository;
    private final CourseRepository courseRepository;


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

    public Object getCourseProvider() {
        URL path = getClass().getClassLoader().getResource("provider.json");
        File jsonFile = new File(path.getFile());
        ObjectMapper mapper = new ObjectMapper();
        try {
            System.out.println("test");

            ArrayList<Provider> providerList = mapper.readValue(jsonFile, new TypeReference<ArrayList<Provider>>(){});

            System.out.println("test" + providerList);
            for (Provider provider : providerList) {
                System.out.println(provider);
                CourseProvider courseProvider = CourseProvider.builder()
                        .name(provider.name)
                        .url(provider.channelId)
                        .build();

                courseProviderRepository.save(courseProvider);
            }
            return "success";
        } catch (IOException e) {
            return "error";
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
                int n = playLists.size();
                for(int i = 0; i < n; i++) {
                    // 데이터 가져오기
//                    System.out.println(playLists.get(i).getSnippet().getChannelId());
                    playLists.get(i).getSnippet();
                    Course course = Course.builder()
                            .title(playLists.get(i).getSnippet().getTitle())
                            .content(playLists.get(i).getSnippet().getLocalized().getTitle())
                            .build();

                    courseRepository.save(course);
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
                System.out.println("-------------------");
                int n = playListItems.size();
                for(int i = 0; i < n; i++) {
                    // 데이터 가져오기
                    Lecture lecture = Lecture.builder()
                            .title(playListItems.get(i).getSnippet().getTitle().toString())
                            .length(0)
                            .thumbnail(playListItems.get(i).getSnippet().getThumbnails().getDefault().getUrl().toString())
                            .content("")
                            .url("sdf")
                            .build();


                    // Service -> Service
                    getVideoInfo(playListItems.get(i).getSnippet().getResourceId().getVideoId(), lecture);

                    lectureRepository.save(lecture);
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

    public List<Video> getVideoInfo(String videoId, Lecture lecture) {
        try {
            youtube = new YouTube.Builder(HTTP_TRANSPORT, JSON_FACTORY, new HttpRequestInitializer() {
                public void initialize(HttpRequest request) throws IOException {
                }
            }).setApplicationName("youtube-video-get").build();

            YouTube.Videos.List videoRequest =
                    youtube.videos().list("id,contentDetails,snippet");

            videoRequest.setKey(requestKey);
            videoRequest.setId(videoId);
            videoRequest.setMaxResults(10l);
            List<Video> videos = videoRequest.execute().getItems();
            if(videos != null) {
                // lecture 추가
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
