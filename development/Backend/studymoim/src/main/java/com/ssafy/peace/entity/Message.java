package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Message {

    @Id
    @GeneratedValue
    private int messageId;

    @ColumnDefault("false")
    private boolean isChecked;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "to_user_id")
    private User toUser;

    @NotNull
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "from_user_id")
    private User fromUser;

    @CreationTimestamp
    private LocalDateTime sendTime;

    @Builder
    public Message(boolean isChecked, User toUser, User fromUser, String content) {
        this.isChecked = isChecked;
        this.content = content;
        this.fromUser = fromUser;
        this.toUser = toUser;
    }
}
