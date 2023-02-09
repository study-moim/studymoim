package com.ssafy.peace.service;

import com.ssafy.peace.entity.StudyHistory;
import com.ssafy.peace.entity.UserHistory;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VideoService {
    private final UserRepository userRepository;
    private final LectureRepository lectureRepository;
    private final StudyRepository studyRepository;
    private final UserHistoryRepository userHistoryRepository;
    private final StudyHistoryRepository studyHistoryRepository;


    // 개인이 스터디 시작 할 때 -> userhistory에서 시작지점 알랴줌, 그 시작지점으로 새로운 history 생성
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

    // 개인이 스터디 종료 할 때

    // 스터디가 스터디 시작 할 때
    public Integer getStartTimeForStudy(Integer studyId, Integer lectureId) {
        Optional<StudyHistory> result = studyHistoryRepository.findFirstByStudy_studyIdAndLecture_lectureIdOrderByEndTimeDesc(studyId, lectureId);

        if(!result.isPresent()) {
            StudyHistory studyHistory = studyHistoryRepository.save(StudyHistory.builder()
                    .study(studyRepository.findById(studyId).get())
                    .lecture(lectureRepository.findById(lectureId).get())
                    .startTimeline(0)
                    .build());
            return studyHistory.getEndTimeline();
        } else {
            StudyHistory studyHistory = studyHistoryRepository.save(StudyHistory.builder()
                    .study(studyRepository.findById(studyId).get())
                    .lecture(lectureRepository.findById(lectureId).get())
                    .startTimeline(result.get().getEndTimeline())
                    .build());
            return studyHistory.getStartTimeline();
        }
    }

    // 스터디가 스터디 종료 할 때
}
