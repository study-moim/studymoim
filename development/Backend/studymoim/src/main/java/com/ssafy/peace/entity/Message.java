package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Message {

    @Id
    @GeneratedValue
    private int messageId;

    @NotNull
    private boolean isChecked;

    @NotNull
    private String content;

    // Todo 연결
    private int fromUserId;
    private int toUserId;
}
