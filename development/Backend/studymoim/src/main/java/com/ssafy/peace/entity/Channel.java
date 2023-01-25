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
public class Channel {

    @Id
    @GeneratedValue
    private int channelId;

    @Size(max = 50)
    @NotNull
    private String name;

    // Todo platformId 연결
    private int platformId;

    // Todo Channel Entity 연결...

}
