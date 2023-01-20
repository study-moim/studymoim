package com.ssafy.peace.entity;

import lombok.*;
import org.hibernate.annotations.Columns;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;


@Table(name = "USER")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class User {

    // Todo 컬럼

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private int userId;

    @Column(name = "email")
    @Size(max = 50)
    @NotNull
    private String email;

    @Column(name = "password")
    @Size(max = 20)
    @NotNull
    private String password;

    @Column(name = "nickname")
    @Size(max = 10)
    @NotNull
    private String nickname;

    @Column(name = "save_name")
    @Size(max = 255)
    private String saveName;

    @Column(name = "register_date")
    @NotNull
    private Timestamp registerDate;

    @Column(name = "last_access_time")
    private Timestamp lastAccessTime;

    @Column(name = "is_quit")
    @NotNull
    private boolean isQuit;

    @Column(name = "quit_time")
    private Timestamp quitTime;




    // Todo 연결...
}
