package com.ssafy.peace.service;

import com.ssafy.peace.entity.StudyHistory;
import com.ssafy.peace.entity.UserHistory;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VideoService {
    private final UserRepository userRepository;
    private final LectureRepository lectureRepository;
    private final StudyRepository studyRepository;
    private final UserHistoryRepository userHistoryRepository;
    private final StudyHistoryRepository studyHistoryRepository;


    // 개인이 시작 할 때 -> userhistory에서 시작지점 알랴줌, 그 시작지점으로 새로운 history 생성
    @Transactional
    public Integer getStartTimeForUser(Integer userId, Integer lectureId) {
        Optional<UserHistory> result = userHistoryRepository.findFirstByUser_UserIdAndLecture_LectureIdOrderByEndTimeDesc(userId, lectureId);

        UserHistory userHistory = userHistoryRepository.save(UserHistory.builder()
                .user(userRepository.findById(userId).get())
                .lecture(lectureRepository.findById(lectureId).get())
                .startTimeline(result.isPresent() ? result.get().getEndTimeline() : 0)
                .endTimeline(result.isPresent() ? result.get().getEndTimeline() : 0)
                .build());
        return userHistory.getStartTimeline();
    }

    // 개인이 종료 할 때
    public void updateStartTimeForUser(Integer userId, Integer lectureId, Integer endTimeline) {
        List<UserHistory> userHistoryList = userHistoryRepository.findAllByStartTimeEqualEndTime(userId, lectureId);
        userHistoryRepository.saveAll(
                userHistoryList.stream()
                .map(userHistory -> userHistory.update(endTimeline, LocalDateTime.now()))
                .collect(Collectors.toList())
        );
    }

    // 스터디가 시작 할 때
    @Transactional
    public Integer getStartTimeForStudy(Integer studyId, Integer lectureId) {
        Optional<StudyHistory> result = studyHistoryRepository.findFirstByStudy_studyIdAndLecture_lectureIdOrderByEndTimeDesc(studyId, lectureId);

        StudyHistory studyHistory = studyHistoryRepository.save(StudyHistory.builder()
                .study(studyRepository.findById(studyId).get())
                .lecture(lectureRepository.findById(lectureId).get())
                .startTimeline(result.isPresent() ? result.get().getEndTimeline() : 0)
                .endTimeline(result.isPresent() ? result.get().getEndTimeline() : 0)
                .build());
        return studyHistory.getEndTimeline();

    }


    // 스터디가 종료 할 때
    public void updateStartTimeForStudy(Integer studyId, Integer lectureId, Integer endTimeline) {
        List<StudyHistory> studyHistoryList = studyHistoryRepository.findAllByStartTimeEqualEndTime(studyId, lectureId);
        studyHistoryRepository.saveAll(
                studyHistoryList.stream()
                        .map(studyHistory -> studyHistory.update(endTimeline, LocalDateTime.now()))
                        .collect(Collectors.toList())
        );
    }
}
