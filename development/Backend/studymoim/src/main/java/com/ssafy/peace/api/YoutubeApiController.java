package com.ssafy.peace.api;

import com.ssafy.peace.service.YoutubeApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/youtube")
@RequiredArgsConstructor
public class YoutubeApiController {

    private final YoutubeApiService youtubeApiService;

    @GetMapping("/testplaylist")
    public String getLYoutubePlayList() {
        String testChannelId = "UCvc8kv-i5fvFTJBFAk6n1SA";
        String result = youtubeApiService.getPlayList(testChannelId);
        System.out.println(result);
        return result;
    }

    @GetMapping("/testplaylistitem")
    public String getLYoutubePlayListItem() {
        String testPlayListId = "PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb";
        String result = youtubeApiService.getPlayListItem(testPlayListId);
        System.out.println(result);
        return result;
    }

}
