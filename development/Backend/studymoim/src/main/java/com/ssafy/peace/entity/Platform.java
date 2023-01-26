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
public class Platform {

    @Id
    @GeneratedValue
    private int platformId;

    @Size(max = 20)
    @NotNull
    private String name;

    @OneToMany(mappedBy = "platform")
    private List<CourseProvider> courseProviders = new ArrayList<>();

}
