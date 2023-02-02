package com.ssafy.peace.dto;

import com.ssafy.peace.entity.Study;
import com.ssafy.peace.entity.StudyMember;
import com.ssafy.peace.entity.User;
import lombok.Builder;
import lombok.Data;

public class StudyMemberDto {

    @Data
    @Builder
    public static class UserInfo {
        private UserDto.Info user;
        private boolean memberRole;
        private boolean isBanned;
        public static UserInfo fromEntity(StudyMember studyMemberEntity) {

            return UserInfo.builder()
                    .user(UserDto.Info.fromEntity(studyMemberEntity.getUser()))
                    .memberRole(studyMemberEntity.isMemberRole())
                    .isBanned(studyMemberEntity.isBanned())
                    .build();
        }
    }

    @Data
    @Builder
    public static class StudyInfo {
        private StudyDto.Info study;
        private boolean memberRole;
        private boolean isBanned;
        public static StudyInfo fromEntity(StudyMember studyMemberEntity) {
            return StudyInfo.builder()
                    .study(StudyDto.Info.fromEntity(studyMemberEntity.getStudy()))
                    .memberRole(studyMemberEntity.isMemberRole())
                    .isBanned(studyMemberEntity.isBanned())
                    .build();
        }
    }

    @Data
    @Builder
    public static class Participate {
        private int userId;
        private int studyId;
    }

}
