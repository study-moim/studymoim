package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Table(name = "platform")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Platform {

    @Id
    @GeneratedValue
    @Column(name = "platform_id")
    private int platformId;

    @Column(name = "name")
    @Size(max = 20)
    @NotNull
    private String name;
}
