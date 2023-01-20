package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Table(name = "alarm")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Alarm {

    @Id
    @GeneratedValue
    @Column(name = "alarm_id")
    private int alarmId;

    @Column(name = "is_checked")
    @NotNull
    private boolean isChecked;

    @Column(name = "content")
    @Size(max = 50)
    @NotNull
    private String content;

    @Column(name = "url")
    @Size(max = 255)
    @NotNull
    private String url;

    // Todo userId 연결
    private int userId;

    // Todo Alarm Entity 연결...

}
