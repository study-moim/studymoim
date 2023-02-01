package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Course;
import com.ssafy.peace.entity.CourseProvider;
import com.ssafy.peace.entity.Platform;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

public class CourseProviderDto {

    @Data
    @Builder
    public static class Info {
        private int courseProviderId;
        private String channelId;
        private String name;
        public static Info fromEntity(CourseProvider courseProviderEntity) {
            return Info.builder()
                    .courseProviderId(courseProviderEntity.getCourseProviderId())
                    .channelId(courseProviderEntity.getChannelId())
                    .name(courseProviderEntity.getName())
                    .build();
        }
    }

    public static class Detail {
        private int courseProviderId;
        private String channelId;
        private String name;
        List<Course> courses = new ArrayList<>();
        private Platform platform;
    }

}
