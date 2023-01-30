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

    public static class Info {
        private int courseProviderId;
        private String channelId;
        private String name;
        List<Course> courses = new ArrayList<>();
        private Platform platform;
    }

    @Data
    @Builder
    public static class Bio {
        private int courseProviderId;
        private String channelId;
        private String name;
        public static Bio fromEntity(CourseProvider courseProviderEntity) {
            return Bio.builder()
                    .courseProviderId(courseProviderEntity.getCourseProviderId())
                    .channelId(courseProviderEntity.getChannelId())
                    .name(courseProviderEntity.getName())
                    .build();
        }
    }
}
