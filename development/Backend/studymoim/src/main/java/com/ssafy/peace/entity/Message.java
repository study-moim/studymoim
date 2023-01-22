package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table(name = "message")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Message {

    @Id
    @GeneratedValue
    @Column(name = "message_id")
    private int messageId;

    @Column(name = "is_checked")
    @NotNull
    private boolean isChecked;

    @Column(name = "content")
    @NotNull
    private String content;

    // Todo 연결
    private int fromUserId;
    private int toUserId;
}
