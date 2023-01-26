package com.ssafy.peace.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class User {

    // Todo 컬럼
    @Id
    @GeneratedValue
    private int userId;

    @Size(max = 50)
    @NotNull
    private String email;

    @Size(max = 20)
    @NotNull
    private String password;

    @Size(max = 10)
    @NotNull
    private String nickname;

    @Size(max = 255)
    private String saveName;

    @NotNull
    private Timestamp registerDate;

    private Timestamp lastAccessTime;

    @NotNull
    private boolean isQuit;

    private Timestamp quitTime;




    // Todo 연결...

    // Builder


    public User(String email, String password, String nickname, String saveName, Timestamp registerDate, Timestamp lastAccessTime, boolean isQuit) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.saveName = saveName;
        this.registerDate = registerDate;
        this.lastAccessTime = lastAccessTime;
        this.isQuit = isQuit;
    }
}
