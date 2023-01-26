package com.ssafy.peace.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@DynamicInsert
@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FreeBoard {

    @Id
    @GeneratedValue
    private int freeBoardId;

    @Size(max = 20)
    @NotNull
    private String title;

    @NotNull
    private String content;

    @CreationTimestamp
    private LocalDateTime publishTime;

    @ColumnDefault("false")
    private boolean isDeleted;

    @NotNull
    private int hit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "freeBoard")
    private List<FreeBoardComment> freeBoardComments = new ArrayList<>();

}
