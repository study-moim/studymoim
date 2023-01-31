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
public class Platform {

    @Id
    @GeneratedValue
    private int platformId;

    @Size(max = 20)
    @NotNull
    @Column(unique = true)
    private String name;

    @OneToMany(mappedBy = "platform")
    private List<CourseProvider> courseProviders = new ArrayList<>();

    @Builder
    public Platform(String name) {
        this.name = name;
    }
}
