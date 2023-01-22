package com.ssafy.peace.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class UserInfo {

    private int userId;

    private String email;

    private String nickname;

    private String saveName;

    private Timestamp registerDate;

    private Timestamp lastAccessTime;

    private boolean isQuit;

    private Timestamp quitTime;

}
