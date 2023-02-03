package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Study;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyRepository  extends JpaRepository<Study, Integer> {

    /*
    특정 키워드를 포함하고 있는 title을 가진 스터디 찾기(0개 일수도 있으니 Optional)
     */
    List<Study> findAllByTitleContaining(String keyword);

    /*
    구인중인 공개 스터디 찾기
     */
    List<Study> findAllByIsCloseIsFalse();

}
