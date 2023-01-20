package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Table(name = "banner")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Banner {

    @Id
    @GeneratedValue
    @Column(name = "banner_id")
    private int bannerId;

    @Column(name = "save_name")
    @Size(max = 255)
    @NotNull
    private int saveName;

    @Column(name = "url")
    @Size(max = 255)
    private int url;

    // Todo Banner Entity 연결...

}
