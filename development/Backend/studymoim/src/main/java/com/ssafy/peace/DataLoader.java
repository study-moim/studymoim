package com.ssafy.peace;

import com.ssafy.peace.dto.StudyCommunityDto;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import com.ssafy.peace.service.YoutubeApiService;
import org.hibernate.exception.ConstraintViolationException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.BufferedInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {
    @Value("${spring.jpa.hibernate.ddl-auto}")
    private String DDL_CONFIG;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FreeBoardRepository freeBoardRepository;
    @Autowired
    private FreeBoardCommentRepository freeBoardCommentRepository;

    @Autowired
    private StudyRepository studyRepository;
    @Autowired
    private CourseProviderRepository courseProviderRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private CourseCategoryRepository courseCategoryRepository;
    @Autowired
    private CourseTypeRepository courseTypeRepository;
    @Autowired
    private PlatformRepository platformRepository;
    @Autowired
    private LectureRepository lectureRepository;
    @Autowired
    private StudyMemberRepository studyMemberRepository;
    @Autowired
    private NoteRepository noteRepository;
    @Autowired
    private CurriculumRepository curriculumRepository;
    @Autowired
    private UserLikeCourseRepository userLikeCourseRepository;
    @Autowired
    private YoutubeApiService youtubeApiService;
    @Autowired
    private UserLikeCategoryRepository userLikeCategoryRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private StudyCommunityRepository studyCommunityRepository;

    @Autowired
    private StudyRequestRepository studyRequestRepository;

    @Override
    public void run(String... args) throws Exception {
        // JPA DDL 설정 보고 실행 판단
        if(!DDL_CONFIG.equals("create")) return;

        // User 3명
        addUsers();
        // 글 한개 작성
        addFreeBoard();



        // CourseCategory 실제 사용할 데이터
        addCategory();
        // youtube api 세팅
        youtubeApiService.init(true);



        // UserLikeCategory 더미 데이터
        addUserLikeCategory();
        // Course 좋아요 더미 데이터
        addUserLikeCourse();
        // Memo 더미 데이터
        addNote();

        // 스터디 관련 더미 데이터
        addStudyAndMember();
        addCurriculum();
        addStudyCommunity();

        // Message 더미 데이터
        addMessage();

        addRegister();
    }

    private void addRegister(){
        User registerUser = userRepository.findById(5).get();
        Study study = studyRepository.findById(378).get();
        studyRequestRepository.save(StudyRequest.builder()
                .user(registerUser)
                .content("열정적으로 참여하겠습니다!")
                .study(study)
                .requestStatus(0)
                .build());
    }

    private void addMessage() {
        List<User> userList = userRepository.findAll();
        for (int i = 0; i < userList.size(); i++) {
            for (int j = 0; j < userList.size(); j++) {
                if(i != j) {
                    if((i+j) % 3 == 0) {
                        messageRepository.save(Message.builder()
                                .content(userList.get(i).getNickname() + "->" + userList.get(j).getNickname() + "에게 주는 확인한 더미 메세지")
                                .isChecked(true)
                                .toUser(userList.get(i))
                                .fromUser(userList.get(j))
                                .build());
                    } else {
                        messageRepository.save(Message.builder()
                                .content(userList.get(i).getNickname() + "->" + userList.get(j).getNickname() + "에게 주는 확인 안한 더미 메세지")
                                .toUser(userList.get(i))
                                .fromUser(userList.get(j))
                                .build());
                    }
                }
            }
        }
    }

    private void addUserLikeCategory() {
        List<User> userList = userRepository.findAll();
        List<CourseCategory> courseCategoryList = courseCategoryRepository.findAll();

        for (int i = 0; i < userList.size(); i++) {
            for (int j = 0; j < courseCategoryList.size(); j++) {
                if((i+j)%3 == 0) {
                    userLikeCategoryRepository.save(UserLikeCategory.builder()
                            .user(userList.get(i))
                            .courseCategory(courseCategoryList.get(j))
                            .build());
                }
            }
        }
    }


    private void addNote() {
        List<Note> noteList = new ArrayList<>();
        List<Lecture> lectureList = lectureRepository.findAll();
        List<User> userList = userRepository.findAll();

        for (int i = 0; i < userList.size(); i++) {
            for (int j = 0; j < lectureList.size(); j++) {
                if((i+j) % 2 == 0) {
                    Note note = Note.builder()
                            .user(userList.get(i))
                            .lecture(lectureList.get(j))
                            .content(userList.get(i).getNickname() + "가 쓴 메모...  강의 이름은 " + lectureList.get(j).getTitle())
                            .build();
                    noteList.add(note);
                }
            }
        }
        noteRepository.saveAll(noteList);
    }

    private void addUserLikeCourse() {
        List<UserLikeCourse> userLikeCourseList = new ArrayList<>();
        List<User> users = userRepository.findAll();
        List<Course> courses = courseRepository.findAll();

        for (int i = 0; i < users.size(); i++) {
            for (int j = 0; j < courses.size(); j++) {
                if((j+i) % 3 == 0) {
                    UserLikeCourse userLikeCourse = UserLikeCourse.builder()
                            .user(users.get(i))
                            .course(courses.get(j))
                            .build();
                    userLikeCourseList.add(userLikeCourse);
                }
            }
        }
        userLikeCourseRepository.saveAll(userLikeCourseList);
    }

    public void addUsers(){
        List<User> userList = new ArrayList<>();
        User user1 = User.builder()
                .email("ssafykim@google.com")
                .nickname("싸피킴")
                .build();
        userList.add(user1);
        User user2 = User.builder()
                .email("ssafypark@google.com")
                .nickname("싸피팍")
                .build();
        userList.add(user2);
        User user3 = User.builder()
                .email("ssafyjung@google.com")
                .nickname("싸피정")
                .build();
        userList.add(user3);
        User user4 = User.builder()
                .email("ssafyasd@google.com")
                .nickname("싸피오")
                .build();
        userList.add(user4);
        User user5 = User.builder()
                .email("ssafyzxc@google.com")
                .nickname("싸피구")
                .build();
        userList.add(user5);



        userRepository.saveAll(userList);
    }

    public void addFreeBoard(){
        User writer = userRepository.findById(1).orElse(null);
        FreeBoard freeBoard = FreeBoard.builder()
                .user(writer)
                .title("에러가 너무 많이 나요")
                .content("문제 해결을 못하겠어요")
                .build();
        freeBoardRepository.save(freeBoard);
        addComment(freeBoard);

        User writer2 = userRepository.findById(2).orElse(null);
        FreeBoard freeBoard2 = FreeBoard.builder()
                .user(writer2)
                .title("카카오 로그인이 안대요")
                .content("포기해도 되나요?")
                .build();
        freeBoardRepository.save(freeBoard2);
    }

    public void addComment(FreeBoard freeBoard){
        FreeBoard targetBoard = freeBoardRepository.findById(freeBoard.getFreeBoardId()).orElse(null);
        User commenter = userRepository.findById(2).orElse(null);
        User commenter2 = userRepository.findById(3).orElse(null);


        FreeBoardComment freeBoardComment = FreeBoardComment.builder()
                .user(commenter)
                .content("컴퓨터 함 밀어버리세요")
                .freeBoard(targetBoard)
                .build();
        freeBoardCommentRepository.save(freeBoardComment);
        FreeBoardComment freeBoardComment2 = FreeBoardComment.builder()
                .user(commenter2)
                .content("너무 과격한거 아닌가요")
                .freeBoard(targetBoard)
                .build();
        freeBoardCommentRepository.save(freeBoardComment2);

    }

    public void addStudyAndMember(){

        List<Study> studyList = new ArrayList<>();
        List<StudyMember> studyMemberList = new ArrayList<>();
        List<User> userList = userRepository.findAll();
        for (int i = 0; i < 5; i++) {
            if(i > 3) {
                studyList.add(Study.builder()
                        .title(i + "번째 스터디")
                        .startTime(LocalDate.now())
                        .content(i + "번째 스터디 설명")
                        .isPublic(true)
                        .isFinished(true)
                        .userLimit(i + 2)
                        .build());
            } else if ( i % 2 == 0) {
                studyList.add(Study.builder()
                        .title(i + "번째 스터디")
                        .startTime(LocalDate.now())
                        .content(i + "번째 스터디 설명")
                        .isPublic(true)
                        .isClose(true)
                        .userLimit(i + 2)
                        .build());
            } else {
                studyList.add(Study.builder()
                        .title(i + "번째 스터디")
                        .startTime(LocalDate.now())
                        .content(i + "번째 스터디 설명")
                        .isPublic(false)
                        .userLimit(i + 2)
                        .build());
            }
            for (int j = 0; j < userList.size(); j++) {
                if(i == j) {
                    studyMemberList.add(StudyMember.builder()
                            .user(userList.get(j))
                            .memberRole(true)
                            .study(studyList.get(i))
                            .build());
                } else if((i+j) % 4 == 0){
                    studyMemberList.add(StudyMember.builder()
                            .user(userList.get(j))
                            .memberRole(false)
                            .isBanned(true)
                            .study(studyList.get(i))
                            .build());
                }
            }
        }
        studyRepository.saveAll(studyList);
        studyMemberRepository.saveAll(studyMemberList);


//        Study study1 = Study.builder()
//                .title("리액트 스터디")
//                .startTime(LocalDate.now())
//                .content("널널하게 하실 분 구해요~ 매주 목 금 저녁 ㄱㄱ")
//                .isPublic(true)
//                .userLimit(4)
//                .build();
//        studyRepository.save(study1);
//        addCurriculum(study1);
//
//        User user1 = userRepository.findByNickname("싸피킴");
//        User user2 = userRepository.findByNickname("싸피팍");
//        User user3 = userRepository.findByNickname("싸피정");
//
//        StudyMember sm1 = StudyMember.builder()
//                .user(user1)
//                .memberRole(true)
//                .study(study1)
//                .build();
//        studyMemberRepository.save(sm1);
//        StudyMember sm2 = StudyMember.builder()
//                .user(user2)
//                .memberRole(false)
//                .study(study1)
//                .build();
//        studyMemberRepository.save(sm2);
//        StudyMember sm3 = StudyMember.builder()
//                .user(user3)
//                .memberRole(false)
//                .study(study1)
//                .build();
//        studyMemberRepository.save(sm3);

    }

    public void addCurriculum(){

        List<Curriculum> curriculumList = new ArrayList<>();
        List<Study> studyList = studyRepository.findAll();
        List<Course> courseList = courseRepository.findAll();
        for (int i = 0; i < studyList.size(); i++) {
            for (int j = 0; j < courseList.size(); j++) {
                curriculumList.add(Curriculum.builder()
                        .study(studyList.get(i))
                        .course(courseList.get(j))
                        .curriculumOrder(curriculumList.size())
                        .build());
            }
        }
        curriculumRepository.saveAll(curriculumList);


//        Course course1 = courseRepository.findById(32).get();
//        Course course2 = courseRepository.findById(39).get();
//        Course course3 = courseRepository.findById(46).get();
//        Curriculum curriculum1 = Curriculum.builder()
//                .study(study)
//                .course(course1)
//                .curriculumOrder(0)
//                .build();
//        curriculumRepository.save(curriculum1);
//        Curriculum curriculum2 = Curriculum.builder()
//                .study(study)
//                .course(course2)
//                .curriculumOrder(1)
//                .build();
//        curriculumRepository.save(curriculum2);
//        Curriculum curriculum3 = Curriculum.builder()
//                .study(study)
//                .course(course3)
//                .curriculumOrder(2)
//                .build();
//        curriculumRepository.save(curriculum3);

    }

    public void addStudyCommunity() {
        List<StudyCommunity> studyCommunityList = new ArrayList<>();
        List<Study> studyList = studyRepository.findAll();
        for (int i = 0; i < studyList.size(); i++) {
            List<StudyMember> studyMemberList = studyMemberRepository.findAllByStudy_StudyId(studyList.get(i).getStudyId());
            for (int j = 0; j < studyMemberList.size(); j++) {
                studyCommunityList.add(StudyCommunity.builder()
                        .content(studyList.get(i).getTitle()+" 스터디 community test " + j)
                        .study(studyList.get(i))
                        .user(studyMemberList.get(j).getUser())
                        .build());
            }
        }
        studyCommunityRepository.saveAll(studyCommunityList);
    }

    public void addCategory(){
        ClassPathResource classPathResource = new ClassPathResource("category.json");

        try {
            Object ob = new JSONParser().parse(new InputStreamReader(classPathResource.getInputStream(), "UTF-8"));
            List<JSONObject> data = (List<JSONObject>) ob;

            for (JSONObject category : data) {
                try {
                    courseCategoryRepository.save(CourseCategory.builder()
                            .name_kor((String) category.get("name_kor"))
                            .name_eng((String) category.get("name_eng"))
                            .imgurl((String) category.get("image"))
                            .build());
                    System.out.println((String) category.get("image"));
                } catch (ConstraintViolationException e) {
                    e.printStackTrace();
                    throw new RuntimeException(e);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

}
