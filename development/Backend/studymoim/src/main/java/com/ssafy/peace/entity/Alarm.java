package com.ssafy.peace.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Alarm {

    @Id
    @GeneratedValue
    private int alarmId;

    @NotNull
    private boolean isChecked;

    @Size(max = 50)
    @NotNull
    private String content;

    @Size(max = 255)
    @NotNull
    private String url;

    // Todo userId 연결
    private int userId;

    // Todo Alarm Entity 연결...

}
