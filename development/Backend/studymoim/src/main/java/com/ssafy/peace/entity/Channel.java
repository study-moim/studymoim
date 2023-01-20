package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Table(name = "channel")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Channel {

    @Id
    @GeneratedValue
    @Column(name = "channel_id")
    private int channelId;

    @Column(name = "name")
    @Size(max = 50)
    @NotNull
    private String name;

    // Todo platformId 연결
    private int platformId;

    // Todo Channel Entity 연결...

}
