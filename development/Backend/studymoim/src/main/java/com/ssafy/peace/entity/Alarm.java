package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Alarm {

    @Id
    @GeneratedValue
    private int alarmId;

    @ColumnDefault("false")
    private boolean isChecked;

    @Size(max = 50)
    @NotNull
    private String content;

    @Size(max = 255)
    @NotNull
    private String url;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Alarm(boolean isChecked, String content, String url, User user) {
        this.isChecked = isChecked;
        this.content = content;
        this.url = url;
        this.user = user;
    }
}
