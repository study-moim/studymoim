package com.ssafy.peace.repository;

import com.ssafy.peace.entity.CourseProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseProviderRepository extends JpaRepository<CourseProvider, Integer> {
    CourseProvider getByChannelId(String channelId);
}
