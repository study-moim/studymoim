package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Study;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface StudyRepository  extends JpaRepository<Study, Integer> {
    /*
    특정 스터디 찾기.. 필요 없을듯
     */
    Study findByStudyId(int studyId);
    /*
    특정 키워드를 포함하고 있는 title을 가진 스터디 찾기(0개 일수도 있으니 Optional)
     */
    Optional<Study> findAllByTitleContaining(String keyword);

    /*
    구인중인 공개 스터디 찾기
     */
    List<Study> findAllByIsOpenIsTrueAndIsPublicIsTrue();

    Optional<Study> findByTitle();



}
