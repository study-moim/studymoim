package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Table(name = "course_provider")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class CourseProvider {

    @Id
    @GeneratedValue
    @Column(name = "course_provider_id")
    private int courseProviderId;

    @Column(name = "url")
    @Size(max = 255)
    @NotNull
    private String url;

    @Column(name = "platform_id")
    @NotNull
    private int platformId;

    // Todo channelId 연결
    private int channelId;

    // Todo CourseProvider Entity 연결...
}
