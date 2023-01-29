package com.ssafy.peace.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Banner {

    @Id
    @GeneratedValue
    private int bannerId;

    @Size(max = 255)
    @NotNull
    private int saveName;

    @Size(max = 255)
    private int url;

    @Builder
    public Banner(int saveName, int url) {
        this.saveName = saveName;
        this.url = url;
    }
}
