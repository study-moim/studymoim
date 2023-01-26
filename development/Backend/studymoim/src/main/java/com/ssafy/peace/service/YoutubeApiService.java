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
import com.ssafy.peace.entity.Lecture;
import com.ssafy.peace.repository.LectureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class YoutubeApiService {

    private final LectureRepository lectureRepository;

    // 추후 키 관리
    private static String requestKey = "AIzaSyBhWMg2moTtilibBevJSI3M9iWUwmkRImQ";
    private static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();
    private static final JsonFactory JSON_FACTORY = new JacksonFactory();
    private static YouTube youtube;


    public String getPlayListItem(String playlistId) {
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
                    lectureRepository.save(lecture);
                    System.out.println(playListItems.get(i).getSnippet().getTitle().toString());
                }
            }

            return playListItems.toString();

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

    public String getPlayList(String channelId) {
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
                    playLists.get(i).getSnippet().getChannelId();

                }
            }

            return playLists.toString();

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
