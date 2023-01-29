package com.ssafy.peace.dto.auth;

import com.ssafy.peace.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
public class TokenInfoDto {
    private String grantType;
    private String accessToken;
    private String refreshToken;
    private int userId;
    private String email;
    private String nickname;
    private String saveName;
    private LocalDateTime registerDate;
    private LocalDateTime lastAccessTime;
    public static UserDto.Info fromEntity(com.ssafy.peace.entity.User userEntity) {
        return UserDto.Info.builder()
                .userId(userEntity.getUserId())
                .email(userEntity.getEmail())
                .nickname(userEntity.getNickname())
                .saveName(userEntity.getSaveName())
                .registerDate(userEntity.getRegisterDate())
                .lastAccessTime(userEntity.getLastLoginTime())
                .build();
    }

}
