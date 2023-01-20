package com.ssafy.peace.entity;

import lombok.*;

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
//@TypeD
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id", length = 64, unique = true)
    @NotNull
    @Size(max = 64)
    private int userId;

    private String email;

    private String password;

    private String nickname;

    private String saveName;

    private Timestamp registerDate;

    private Timestamp lastAccessTime;

    private boolean isQuit;

    private Timestamp quitTime;

}
