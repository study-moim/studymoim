package com.ssafy.peace.api;

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
import com.ssafy.peace.service.YoutubeApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/youtube")
@RequiredArgsConstructor
public class YoutubeApiController {

    private final YoutubeApiService youtubeApiService;

    @GetMapping("/testplaylist")
    public String getLYoutubePlayList() {
        // 강좌
        String testChannelId = "UCvc8kv-i5fvFTJBFAk6n1SA";
        String result = youtubeApiService.getPlayList(testChannelId).toString();
        System.out.println(result);
        return result;
    }

    @GetMapping("/testplaylistitem")
    public String getLYoutubePlayListItem() {
        // 강좌 안의 강의
        String testPlayListId = "PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb";
        String result = youtubeApiService.getPlayListItem(testPlayListId).toString();
        System.out.println(result);
        return result;
    }
}
