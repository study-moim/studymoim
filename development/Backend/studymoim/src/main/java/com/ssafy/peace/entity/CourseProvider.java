package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

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
    @Size(max = 50)
    private String name;

    @OneToMany(mappedBy = "courseProvider")
    List<Course> courses = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "platform_id")
    private Platform platform;
}
