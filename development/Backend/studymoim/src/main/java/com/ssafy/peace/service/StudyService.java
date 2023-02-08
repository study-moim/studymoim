package com.ssafy.peace.service;

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
        List<Curriculum> curricula = new ArrayList<>();
        int order = 0;
        for(int courseId : study.getCourseIdList()){
            Curriculum curriculum = Curriculum.builder()
                    .course(courseRepository.findById(courseId).get())
                    .study(newStudy)
                     .curriculumOrder(order++)
                    .build();
            curricula.add(curriculum);
        }
        curriculumRepository.saveAll(curricula);
    }

    @Transactional
    public StudyDto.Info updateStudy(Integer studyId, StudyDto.Make study) throws RollbackException{
        return StudyDto.Info.fromEntity(studyRepository.save(Study.builder()
                .title(study.getTitle())
                .content(study.getContent())
                .startTime(study.getStartTime())
                .userLimit(study.getUserLimit())
                .isPublic(study.isPublic())
                .build()
                .updateId(studyId)));
    }

    @Transactional
    public StudyDto.Info updateNotice(Integer studyId, StudyDto.Notice notice) throws RollbackException{
        return StudyDto.Info.fromEntity(studyRepository.findById(studyId).get().updateNotice(notice.getNotice()));
    }

    @Transactional
    public Boolean checkLive(Integer studyId) throws RollbackException{
        return studyRepository.findById(studyId).get().isLive();
    }
    @Transactional
    public LectureDto.Info getRecentLiveLecture(Integer studyId) throws RollbackException{
        return LectureDto.Info.fromEntity(
                lectureRepository.findById(
                        studyRepository.findById(studyId).get()
                                .getRecentLectureId()
                ).get());
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
        studyMemberRepository.save(StudyMember.builder()
                .study(studyRepository.findById(studyId).get())
                .user(userRepository.findById(userId).get())
                .build()
        );
    }

    @Transactional
    public StudyRequestDto.Info requestStudy(Integer studyId, StudyRequestDto.Request studyRequest) throws RollbackException  {
        int userId = studyRequest.getUserId();
        if(studyRequestRepository.existsByUser_UserIdAndStudy_StudyId(userId, studyId)) return null;
        if (studyMemberRepository.existsByUser_userIdAndStudy_studyId(userId, studyId)) return null;
        if (studyMemberRepository.existsByUser_userIdAndStudy_studyIdAndIsBannedIsTrue(userId, studyId)) return null;
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
    public List<StudyCommunityDto> getStudyCommunityList(Integer studyId) {
        return studyCommunityRepository.findAllByStudy_studyIdOrderByPublishTimeDesc(studyId).stream()
                .map(studyCommunity -> StudyCommunityDto.fromEntity(studyCommunity))
                .collect(Collectors.toList());
    }

    public void addStudyCommunity(StudyCommunityDto studyCommunityDto) {
        studyCommunityRepository.save(StudyCommunity.builder()
                .content(studyCommunityDto.getContent())
                .user(userRepository.findByUserId(studyCommunityDto.getUserId()))
                .study(studyRepository.findById(studyCommunityDto.getStudyId()).get())
                .build());
    }
}
