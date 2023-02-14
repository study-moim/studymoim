package com.ssafy.peace.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.peace.dto.*;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.RollbackException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudyService {

    private final StudyRepository studyRepository;
    private final StudyMemberRepository studyMemberRepository;
    private final StudyRequestRepository studyRequestRepository;
    private final StudyHistoryRepository studyHistoryRepository;
    private final UserRepository userRepository;
    private final CurriculumRepository curriculumRepository;
    private final CourseRepository courseRepository;
    private final LectureRepository lectureRepository;
    private final StudyCommunityRepository studyCommunityRepository;
    private final AlarmRepository alarmRepository;
    private final AlarmService alarmService;

    @Transactional
    public List<StudyDto.Info> getStudyList() throws RollbackException{
        return studyRepository.findAllByIsCloseIsFalse()
                .stream()
                .map(StudyDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<StudyDto.Detail> getStudyListIsDesc(boolean isDesc) {
        if(isDesc) {
            return studyRepository.findAllByIsCloseIsFalse().stream()
                    .map(StudyDto.Detail::fromEntity)
                    .sorted(Comparator.comparing(m -> {
                        long n = studyMemberRepository.countByStudy_studyIdAndIsBannedIsFalse(m.getStudyId()) - m.getUserLimit();
                        return n - m.getUserLimit();
                    })).collect(Collectors.toList());
        } else {
            return studyRepository.findAllByIsCloseIsFalse().stream()
                    .map(StudyDto.Detail::fromEntity)
                    .sorted(Comparator.comparing(m -> {
                        long n = studyMemberRepository.countByStudy_studyIdAndIsBannedIsFalse(m.getStudyId()) - m.getUserLimit();
                        return m.getUserLimit() - n;
                    })).collect(Collectors.toList());
        }
    }

    @Transactional
    public List<StudyDto.Info> getStudyListContainCourseCategory(Integer courseCategoryId) {
        return studyRepository.findByCourseCategoryId(courseCategoryId).stream()
                .map(StudyDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public StudyDto.Detail getStudyDetail(Integer studyId) throws RollbackException{
        Optional<Study> result = studyRepository.findById(studyId);
        if(!result.isPresent()) return null;
        return StudyDto.Detail.fromEntity(result.get());
    }

    @Transactional
    public List<StudyHistoryDto.Info> getStudyHistory(Integer studyId) throws RollbackException{
        Optional<Study> result = studyRepository.findById(studyId);

        if(!result.isPresent()) return null;
        return studyHistoryRepository.findAllByStudy_studyId(studyId).stream()
                .map(StudyHistoryDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public void makeStudy(StudyDto.Make study) throws RollbackException {
        Study newStudy = Study.builder()
                .title(study.getTitle())
                .content(study.getContent())
                .startTime(study.getStartTime())
                .userLimit(study.getUserLimit())
                .isPublic(study.isPublic())
                .isLive(false)
                .build();
        studyRepository.save(newStudy);
        // 스터디를 만든 사람이 곧 방장
        studyMemberRepository.save(StudyMember.builder()
                .user(userRepository.findById(study.getLeadUserId()).get())
                .study(newStudy)
                .memberRole(true)
                .build());
        // 커리큘럼이랑 연결
        makeCurriculum(newStudy, study.getCourseIdList());
    }


    @Transactional
    public void updateStudy(Integer studyId, StudyDto.Update study) throws RollbackException{
        studyRepository.save(Study.builder()
                .title(study.getTitle())
                .content(study.getContent())
                .startTime(study.getStartTime())
                .userLimit(study.getUserLimit())
                .isPublic(study.isPublic())
                .isClose(study.isClose())
                .isFinished(study.isFinished())
                .build()
                .updateId(studyId));
    }

    @Transactional
    public StudyDto.Info updateNotice(Integer studyId, StudyDto.Notice notice) throws RollbackException{
        return StudyDto.Info.fromEntity(studyRepository.findById(studyId).get().updateNotice(notice.getNotice()));
    }

    @Transactional
    public LectureDto.Info getRecentLiveLecture(Integer studyId) throws RollbackException{
        if (studyRepository.findById(studyId).get().getRecentLectureId() != null){
            return LectureDto.Info.fromEntity(
                    lectureRepository.findById(
                            studyRepository.findById(studyId).get()
                                    .getRecentLectureId()
                    ).get());
        } else{
            return null;
        }


    }
    @Transactional
    public StudyDto.Info updateLive(Integer studyId, boolean isLive) throws RollbackException{
        return StudyDto.Info.fromEntity(studyRepository.findById(studyId).get().updateLive(isLive));
    }
    @Transactional
    public StudyDto.Info updateLive(Integer studyId, boolean isLive, Integer recentLectureId) throws RollbackException{
        return StudyDto.Info.fromEntity(studyRepository.findById(studyId).get().updateLive(isLive, recentLectureId));
    }

    @Transactional
    public List<StudyDto.Info> getStudyInfoListFindByName(String searchText) throws RollbackException{

        return studyRepository.findAllByTitleContaining(searchText).stream()
                .map(StudyDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public void participateStudy(Integer studyId, StudyMemberDto.Participate studyMember){
        int userId = studyMember.getUserId();
        if (studyMemberRepository.existsByUser_userIdAndStudy_studyId(userId, studyId)) return;
        if (studyMemberRepository.existsByUser_userIdAndStudy_studyIdAndIsBannedIsTrue(userId, studyId)) return;
        addStudyMemberAndCheckUserLimit(studyId, userId);
        List<UserDto.Info> studyMembers = StudyDto.Detail.fromEntity(studyRepository.findById(studyId).get()).getMembers();
        studyMembers.add(StudyDto.Detail.fromEntity(studyRepository.findById(studyId).get()).getLeadUser());
        for (UserDto.Info user: studyMembers) {
            alarmRepository.save(Alarm.builder()
                    .content(userRepository.findById(studyMember.getUserId()).get().getNickname() + "님이 " + studyRepository.findById(studyId).get().getTitle() +" 스터디에 가입하셨습니다.")
                    .user(userRepository.findById(user.getUserId()).get())
                    .url("/studydetail/" + studyId)
                    .build());
        }
    }



    @Transactional
    public StudyRequestDto.Info requestStudy(Integer studyId, StudyRequestDto.Request studyRequest) throws RollbackException  {
        int userId = studyRequest.getUserId();
        if(studyRequestRepository.existsByUser_UserIdAndStudy_StudyId(userId, studyId)) return null;
        if (studyMemberRepository.existsByUser_userIdAndStudy_studyId(userId, studyId)) return null;
        if (studyMemberRepository.existsByUser_userIdAndStudy_studyIdAndIsBannedIsTrue(userId, studyId)) return null;
        // 스터디장에게 알람
        alarmRepository.save(Alarm.builder()
                .content(userRepository.findById(studyRequest.getUserId()).get().getNickname() + "님이 " + studyRepository.findById(studyId).get().getTitle() +" 스터디에 가입을 요청했습니다.")
                .user(userRepository.findById(StudyDto.Info.fromEntity(studyRepository.findById(studyId).get()).getLeadUser().getUserId()).get())
                .url("/studydetail/" + studyId)
                .build());
        return StudyRequestDto.Info.fromEntity(studyRequestRepository.save(StudyRequest.builder()
                .user(userRepository.findById(studyRequest.getUserId()).get())
                .study(studyRepository.findById(studyId).get())
                .content(studyRequest.getContent())
                .build()));


    }

    @Transactional
    public List<StudyRequestDto.Info> getRequest(Integer studyId){
        return studyRequestRepository.findAllByStudy_studyIdAndRequestStatusEquals(studyId, 0).stream()
                .map(StudyRequestDto.Info::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public StudyRequestDto.Info decideRequest(Integer studyId, Integer requestId, StudyRequestDto.Decide request){
        // 수락하면 스터디에 인원 추가, 거절당하면 알람만 보내기
        if (request.getRequestStatus() == 1) {
            addStudyMemberAndCheckUserLimit(studyId, request.getUserId());

            alarmRepository.save(Alarm.builder()
                    .content(studyRepository.findById(studyId).get().getTitle() +" 스터디에 가입되셨습니다.")
                    .user(userRepository.findById(request.getUserId()).get())
                    .url("/studydetail/" + studyId)
                    .build());
            List<UserDto.Info> studyMembers = StudyDto.Detail.fromEntity(studyRepository.findById(studyId).get()).getMembers();
            for (UserDto.Info user: studyMembers) {
                alarmRepository.save(Alarm.builder()
                        .content(userRepository.findById(request.getUserId()).get().getNickname() + "님이 " + studyRepository.findById(studyId).get().getTitle() +" 스터디에 가입하셨습니다.")
                        .user(userRepository.findById(user.getUserId()).get())
                        .url("/studydetail/" + studyId)
                        .build());
            }

        } else {
            alarmRepository.save(Alarm.builder()
                    .content(studyRepository.findById(studyId).get().getTitle() +" 스터디 가입 거절되셨습니다.")
                    .user(userRepository.findById(request.getUserId()).get())
                    .url("/study/")
                    .build());
        }

        return StudyRequestDto.Info.fromEntity(studyRequestRepository.save(StudyRequest.builder()
                .content(studyRequestRepository.findById(requestId).get().getContent())
                .requestStatus(request.getRequestStatus())
                .user(userRepository.findById(request.getUserId()).get())
                .study(studyRepository.findById(studyId).get())
                .build().updateId(requestId)));
    }

    @Transactional
    public void banUserFromStudy(Integer studyId, Integer userId){
        if (!studyMemberRepository.existsByUser_userIdAndStudy_studyId(userId, studyId)) return;
        studyMemberRepository.save(StudyMember.builder()
                .study(studyRepository.findById(studyId).get())
                .user(userRepository.findById(userId).get())
                        .isBanned(true)
                .build()
                .updateId(studyMemberRepository.findByUser_userIdAndStudy_studyId(userId, studyId).getStudyMemberId())
        );
    }

    @Transactional
    public List<StudyCommunityDto.Info> getStudyCommunityList(Integer studyId) {
        return studyCommunityRepository.findAllByStudy_studyIdOrderByPublishTimeDesc(studyId).stream()
                .map(studyCommunity -> StudyCommunityDto.Info.fromEntity(studyCommunity))
                .collect(Collectors.toList());
    }

    public void addStudyCommunity(StudyCommunityDto.Make studyCommunityDto) {
        studyCommunityRepository.save(StudyCommunity.builder()
                .content(studyCommunityDto.getContent())
                .user(userRepository.findByUserId(studyCommunityDto.getUserId()))
                .study(studyRepository.findById(studyCommunityDto.getStudyId()).get())
                .build());
    }

    public void updateStudyCurriculum(StudyDto.Curriculum curriculum){
        // 이전의 커리큘럼 날리기
        List<Curriculum> curricula = studyRepository.findById(curriculum.getStudyId()).get().getCurricula();
        curriculumRepository.deleteAll(curricula);
        makeCurriculum(studyRepository.findById(curriculum.getStudyId()).get(), curriculum.getCourseIdList());
    }

    private void addStudyMemberAndCheckUserLimit(Integer studyId, int userId) {
        studyMemberRepository.save(StudyMember.builder()
                .study(studyRepository.findById(studyId).get())
                .user(userRepository.findById(userId).get())
                .build()
        );

        // 인원이 꽉 차면 스터디 인원 모집을 마감한다
        Study study = studyRepository.findById(studyId).get();
        StudyDto.Info studyDto = StudyDto.Info.fromEntity(study);
        if (studyDto.getUserGathered() + 1 == studyDto.getUserLimit()){
            study.updateCloseStatus();
        }
    }

    private void makeCurriculum(Study study, List<Integer> courseIdList) {
        List<Curriculum> curricula = new ArrayList<>();
        int order = 0;
        for(int courseId : courseIdList){
            Curriculum curriculum = Curriculum.builder()
                    .course(courseRepository.findById(courseId).get())
                    .study(study)
                    .curriculumOrder(order++)
                    .build();
            curricula.add(curriculum);
        }
        curriculumRepository.saveAll(curricula);
    }

    public List<Map<Integer, String>> getCourseListHistoryByStudyId(Integer studyId) throws JsonProcessingException {
        List<Map<Integer, String>> result = new ArrayList<>();
        List<Course> courseList =  studyRepository.findById(studyId).get().getCurricula().stream()
                .map(curriculum -> curriculum.getCourse()).collect(Collectors.toList());
        for (int i = 0; i < courseList.size(); i++) {
            Map<Integer, String> mapItem = new HashMap<>();
            List<Map<String, Integer>> temp = studyRepository.findAllByProgress(studyId, courseList.get(i).getCourseId());
            ObjectMapper mapper = new ObjectMapper();
            if(studyRepository.findAllByProgress(studyId, courseList.get(i).getCourseId()).size() != 0) {
                mapItem.put(courseList.get(i).getCourseId(), mapper.writeValueAsString(temp));
                result.add(mapItem);
            }
        }
        return result;
    }
}
