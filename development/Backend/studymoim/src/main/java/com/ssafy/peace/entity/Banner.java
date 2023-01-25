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
public class Banner {

    @Id
    @GeneratedValue
    private int bannerId;

    @Size(max = 255)
    @NotNull
    private int saveName;

    @Size(max = 255)
    private int url;

    // Todo Banner Entity 연결...

}
