package com.ssafy.peace.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class CourseProvider {

    @Id
    @GeneratedValue
    private int courseProviderId;

    @Size(max = 255)
    @NotNull
    @Column(unique = true)
    private String channelId;

    @NotNull
    @Size(max = 50)
    private String name;

    @OneToMany(mappedBy = "courseProvider")
    List<Course> courses = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "platform_id")
    private Platform platform;

    @Builder
    public CourseProvider(String channelId, String name, Platform platform) {
        this.channelId = channelId;
        this.name = name;
        this.platform = platform;
    }
}
