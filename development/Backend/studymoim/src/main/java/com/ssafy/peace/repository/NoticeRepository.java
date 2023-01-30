package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Integer> {

    // Todo: 고려사항 있음
    // 공지사항은 기본 제공되는 함수만으로도 충분하지 않을까?
}
