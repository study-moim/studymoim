package com.ssafy.peace.repository;

import com.ssafy.peace.entity.Platform;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlatformRepository extends JpaRepository<Platform, Integer> {
    Platform getByPlatformId(int platformId);

    Platform findByName(String searchName);
}
