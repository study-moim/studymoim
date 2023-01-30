package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Message {

    @Id
    @GeneratedValue
    private int messageId;

    @NotNull
    @ColumnDefault("false")
    private boolean isChecked;

    @NotNull
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "from_user_id")
    private User fromUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "to_user_id")
    private User toUser;

    @Builder
    public Message(String content, User fromUser, User toUser, boolean isChecked) {
        this.content = content;
        this.fromUser = fromUser;
        this.toUser = toUser;
        this.isChecked = isChecked;
    }
}
