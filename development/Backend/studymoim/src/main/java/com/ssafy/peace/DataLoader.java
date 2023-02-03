package com.ssafy.peace;

import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import com.ssafy.peace.service.YoutubeApiService;
import org.hibernate.exception.ConstraintViolationException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Override
    public void run(String... args) throws Exception {


        // User 3명
        addUsers();
        // 글 한개 작성
        addFreeBoard();

        // youtube api 세팅
        youtubeApiService.init();

        // Course 좋아요 더미 데이터
        addUserLikeCourse();

        // CourseCategory 더미 데이터
        addCategory();

        // Memo 더미 데이터
        addNote();

        addStudyAndMember();

        // UserLikeCategory 더미 데이터
        addUserLikeCategory();

        // Message 더미 데이터
        addMessage();
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
        Study study1 = Study.builder()
                .title("리액트 스터디")
                .startTime(LocalDate.now())
                .content("널널하게 하실 분 구해요~ 매주 목 금 저녁 ㄱㄱ")
                .isPublic(true)
                .userLimit(4)
                .build();
        studyRepository.save(study1);

        User user1 = userRepository.findByNickname("싸피킴");
        User user2 = userRepository.findByNickname("싸피팍");
        User user3 = userRepository.findByNickname("싸피정");

        StudyMember sm1 = StudyMember.builder()
                .user(user1)
                .memberRole(true)
                .study(study1)
                .build();
        studyMemberRepository.save(sm1);
        StudyMember sm2 = StudyMember.builder()
                .user(user2)
                .memberRole(false)
                .study(study1)
                .build();
        studyMemberRepository.save(sm2);
        StudyMember sm3 = StudyMember.builder()
                .user(user3)
                .memberRole(false)
                .study(study1)
                .build();
        studyMemberRepository.save(sm3);
        addCurriculum(study1);
    }

    public void addCurriculum(Study study){

        Course course1 = courseRepository.findByTitle("웹개발자도구 shorts");
        Course course2 = courseRepository.findByTitle("GIT Shorts");
        Course course3 = courseRepository.findByTitle("2022 코딩애플 리액트 강의");
        Curriculum curriculum1 = Curriculum.builder()
                .study(study)
                .course(course1)
                .build();
        curriculumRepository.save(curriculum1);
        Curriculum curriculum2 = Curriculum.builder()
                .study(study)
                .course(course2)
                .build();
        curriculumRepository.save(curriculum2);
        Curriculum curriculum3 = Curriculum.builder()
                .study(study)
                .course(course3)
                .build();
        curriculumRepository.save(curriculum3);

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

            List<CourseCategory> courseCategoryList = courseCategoryRepository.findAll();
            List<Course> courseList = courseRepository.findAll();

            for (int i = 0; i < courseCategoryList.size(); i++) {
                CourseCategory courseCategory = courseCategoryList.get(i);
                for (int j = 0; j < courseList.size(); j++) {
                    Course course = courseList.get(j);
                    if(course.getTitle().contains(courseCategory.getName_kor())) {
                        courseTypeRepository.save(CourseType.builder()
                                .course(course)
                                .courseCategory(courseCategory)
                                .build());
                    } else if (course.getTitle().contains(courseCategory.getName_eng())) {
                        courseTypeRepository.save(CourseType.builder()
                                .course(course)
                                .courseCategory(courseCategory)
                                .build());
                    }
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

}
