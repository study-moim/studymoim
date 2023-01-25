package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class CourseProvider {

    @Id
    @GeneratedValue
    private int courseProviderId;

    @Size(max = 255)
    @NotNull
    private String url;

    @NotNull
    private int platformId;

    // Todo channelId 연결
    private int channelId;

    // Todo CourseProvider Entity 연결...
}
