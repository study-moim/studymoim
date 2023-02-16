package com.ssafy.peace;

import com.ssafy.peace.dto.StudyCommunityDto;
import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import com.ssafy.peace.service.CourseTypeService;
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
    private CourseTypeService courseTypeService;

    @Autowired
    private UserLikeCategoryRepository userLikeCategoryRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private StudyCommunityRepository studyCommunityRepository;

    @Autowired
    private StudyRequestRepository studyRequestRepository;

    @Autowired
    private QuestionBoardRepository questionBoardRepository;

    @Autowired
    private FollowRepository followRepository;

    @Autowired
    private UserHistoryRepository userHistoryRepository;

    @Override
    public void run(String... args) throws Exception {
        // JPA DDL 설정 보고 실행 판단
        if(!DDL_CONFIG.equals("create")) return;


        // CourseCategory 실제 사용할 데이터
        addCategory();
        // youtube api 세팅
//        youtubeApiService.init(true);

        // 강좌, 강의 더미 데이터
        addYTAndProvider();
        addCourse();
        System.out.println("DataLoader 30% clear");
        addLecture();
        System.out.println("DataLoader 60% clear");

        // User 5명
        addUsers();
        // 자유글 작성
        addFreeBoard();
        // 과목 질문글 작성
        addQuestionBoard();
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
        // Follow 더미 데이터
        addFollow();
        // History 더미 데이터
        addUserHistory();
//        addStudyHistory();

        System.out.println("DataLoader 100% clear");
    }

    private void addYTAndProvider(){

        // platform 유튜브 추가... 추후 여러개 플랫폼 추가하면 json으로?
        try {
            Platform platform = Platform.builder()
                    .name("유튜브")
                    .build();

            platformRepository.saveAndFlush(platform);

        } catch (ConstraintViolationException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }

        ClassPathResource classPathResource = new ClassPathResource("provider.json");

        try (InputStream is = new BufferedInputStream(classPathResource.getInputStream())) {

            Object ob = new JSONParser().parse(new InputStreamReader(classPathResource.getInputStream(), "UTF-8"));

            List<JSONObject> data = (List<JSONObject>) ob;

            for (JSONObject provider : data) {
                try {
                    CourseProvider courseProvider = CourseProvider.builder()
                            .name((String) provider.get("name"))
                            .channelId((String) provider.get("channelId"))
                            .platform(platformRepository.findByName("유튜브"))
                            .build();

                    courseProviderRepository.saveAndFlush(courseProvider);

                } catch (ConstraintViolationException e) {
                    e.printStackTrace();
                    throw new RuntimeException(e);
                }
            }
            // 모든 강좌, 강의 DB 등록 후, 모든 강좌에 태그 달아주기
//            courseTypeService.insertCourseType();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void addCourse(){

        ClassPathResource classPathResource = new ClassPathResource("course_full.json");

        try {
            Object ob = new JSONParser().parse(new InputStreamReader(classPathResource.getInputStream(), "UTF-8"));
            List<JSONObject> data = (List<JSONObject>) ob;

            for (JSONObject course : data) {
                try {
                    int num = Integer.parseInt(String.valueOf(course.get("course_provider_id")));
                    courseRepository.saveAndFlush(Course.builder()
                            .title((String) course.get("title"))
                            .content((String) course.get("content"))
                            .playlistId((String) course.get("playlist_id"))
                            .thumbnail((String) course.get("thumbnail"))
                            .courseProvider(courseProviderRepository.findById(num).get())
                            .build());
                } catch (ConstraintViolationException e) {
                    e.printStackTrace();
                    throw new RuntimeException(e);
                }
            }
            courseTypeService.insertCourseType();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void addLecture(){

        ClassPathResource classPathResource = new ClassPathResource("lecture_full.json");

        try {
            Object ob = new JSONParser().parse(new InputStreamReader(classPathResource.getInputStream(), "UTF-8"));
            List<JSONObject> data = (List<JSONObject>) ob;

            for (JSONObject lecture : data) {
                try {
                    int length = Integer.parseInt(String.valueOf(lecture.get("length")));
                    int num = Integer.parseInt(String.valueOf(lecture.get("course_id")));
                    lectureRepository.saveAndFlush(Lecture.builder()
                            .title((String) lecture.get("title"))
                            .length(length)
                            .thumbnail((String) lecture.get("thumbnail"))
                            .content((String) lecture.get("content"))
                            .videoId((String) lecture.get("video_id"))
                            .course(courseRepository.findById(num).get())
                            .build());
                } catch (ConstraintViolationException e) {
                    e.printStackTrace();
                    throw new RuntimeException(e);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    private void addUserHistory() {
        List<User> userList = userRepository.findAll();
        List<Lecture> lectureList = lectureRepository.findAll();
        List<UserHistory> userHistoryList = new ArrayList<>();
        for (int i = 0; i < userList.size(); i++) {
            for (int j = 0; j < lectureList.size(); j++) {
                if(j%8 == 0) {
                    userHistoryList.add(UserHistory.builder()
                            .startTimeline(0)
                            .endTimeline(20)
                            .lecture(lectureList.get(j))
                            .user(userList.get(i))
                            .build());
                }
            }
        }
        userHistoryRepository.saveAllAndFlush(userHistoryList);
    }

    private void addFollow() {
        List<User> userList = userRepository.findAll();
        List<Follow> followList = new ArrayList<>();
        for (int i = 0; i < userList.size(); i++) {
            for (int j = 0; j < userList.size(); j++) {
                if(i == j)  continue;
                else if(i > j) {
                    followList.add(Follow.builder()
                            .toUser(userList.get(i))
                            .fromUser(userList.get(j))
                            .build());
                } else if((i + j) % 2 == 0) {
                    followList.add(Follow.builder()
                            .toUser(userList.get(i))
                            .fromUser(userList.get(j))
                            .build());
                }
            }
        }
        followRepository.saveAllAndFlush(followList);
    }

    private void addRegister(){
        List<User> userList = userRepository.findAll();
        List<Study> studyList = studyRepository.findAll();
        List<StudyRequest> studyRequestList = new ArrayList<>();

        for (int i = 0; i < userList.size(); i++) {
            for (int j = 0; j < studyList.size(); j++) {
                if(i != j && (i+j) %2 == 0)
                studyRequestList.add(StudyRequest.builder()
                        .user(userList.get(i))
                        .content(userList.get(i).getNickname() + " 가입 메세지 테스트... 스터디 : "+ studyList.get(j).getTitle())
                        .study(studyList.get(j))
                        .requestStatus((i+j)%3)
                        .build());
            }
        }
        studyRequestRepository.saveAllAndFlush(studyRequestList);
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
        noteRepository.saveAllAndFlush(noteList);
    }

    private void addUserLikeCourse() {
        List<UserLikeCourse> userLikeCourseList = new ArrayList<>();
        List<User> users = userRepository.findAll();
        List<Course> courses = courseRepository.findAll();

        for (int i = 0; i < users.size(); i++) {
            for (int j = 0; j < courses.size(); j++) {
                if((j+i) % 12 == 0) {
                    UserLikeCourse userLikeCourse = UserLikeCourse.builder()
                            .user(users.get(i))
                            .course(courses.get(j))
                            .build();
                    userLikeCourseList.add(userLikeCourse);
                }
            }
        }
        userLikeCourseRepository.saveAllAndFlush(userLikeCourseList);
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



        userRepository.saveAllAndFlush(userList);
    }



    public void addQuestionBoard() {
        List<User> userList = userRepository.findAll();
        List<Lecture> lectureList = lectureRepository.findAll();
        List<QuestionBoard> questionBoardList = new ArrayList<>();
        for (int i = 0; i < userList.size(); i++) {
            for (int j = 0; j < lectureList.size(); j++) {
                if((i+j) % 4 == 0) {
                    for (int k = 0; k < 5; k++) {
                        questionBoardList.add(QuestionBoard.builder()
                                .title(i + "유저 " + j + "번째 질문글")
                                .content("pagination test 입니다")
                                .questionTime((int) (Math.random() * Integer.MAX_VALUE) % lectureList.get(j).getLength())
                                .user(userList.get(i))
                                .lecture(lectureList.get(j))
                                .build());
                    }
                }
            }
        }
        questionBoardRepository.saveAllAndFlush(questionBoardList);
    }

    public void addFreeBoard(){
        List<User> userList =  userRepository.findAll();
        List<FreeBoard> freeBoardList = new ArrayList<>();
        for (int i = 0; i < userList.size(); i++) {
            for (int j = 0; j < 20; j++) {
                freeBoardList.add(FreeBoard.builder()
                        .user(userList.get(i))
                        .title(i+"유저가 쓴 "+j+"번째 자유게시판 글")
                        .content("pagination test 입니다")
                        .build());
            }
        }
        freeBoardRepository.saveAllAndFlush(freeBoardList);
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
        studyRepository.saveAllAndFlush(studyList);
        studyMemberRepository.saveAllAndFlush(studyMemberList);
    }

    public void addCurriculum(){

        List<Curriculum> curriculumList = new ArrayList<>();
        List<Study> studyList = studyRepository.findAll();
        List<Course> courseList = courseRepository.findAll();
        for (int i = 0; i < studyList.size(); i++) {
            for (int j = 0; j < courseList.size(); j++) {
                if((i+j) % 40 == 0) {
                    curriculumList.add(Curriculum.builder()
                            .study(studyList.get(i))
                            .course(courseList.get(j))
                            .curriculumOrder(curriculumList.size())
                            .build());
                }
            }
        }
        curriculumRepository.saveAllAndFlush(curriculumList);
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
        studyCommunityRepository.saveAllAndFlush(studyCommunityList);
    }

    public void addCategory(){
        ClassPathResource classPathResource = new ClassPathResource("category.json");

        try {
            Object ob = new JSONParser().parse(new InputStreamReader(classPathResource.getInputStream(), "UTF-8"));
            List<JSONObject> data = (List<JSONObject>) ob;

            for (JSONObject category : data) {
                try {
                    courseCategoryRepository.saveAndFlush(CourseCategory.builder()
                            .name_kor((String) category.get("name_kor"))
                            .name_eng((String) category.get("name_eng"))
                            .imgurl((String) category.get("image"))
                            .build());
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
