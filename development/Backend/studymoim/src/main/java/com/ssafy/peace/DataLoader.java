package com.ssafy.peace;

import com.ssafy.peace.entity.*;
import com.ssafy.peace.repository.*;
import com.ssafy.peace.service.YoutubeApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

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

    @Override
    public void run(String... args) throws Exception {


        // User 3명
        addUsers();
        // 글 한개 작성
        addFreeBoard();

//        addPlatformAndCourseProvider();

        // youtube api 세팅
        youtubeApiService.init();

        // Course 좋아요 더미 데이터
        addUserLikeCourse();

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



        userRepository.saveAllAndFlush(userList);
    }

    public void addFreeBoard(){
        User writer = userRepository.findById(1).orElse(null);
        FreeBoard freeBoard = FreeBoard.builder()
                .user(writer)
                .title("에러가 너무 많이 나요")
                .content("문제 해결을 못하겠어요")
                .build();
        freeBoardRepository.saveAndFlush(freeBoard);
        addComment(freeBoard);

        User writer2 = userRepository.findById(2).orElse(null);
        FreeBoard freeBoard2 = FreeBoard.builder()
                .user(writer2)
                .title("카카오 로그인이 안대요")
                .content("포기해도 되나요?")
                .build();
        freeBoardRepository.saveAndFlush(freeBoard2);
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
        freeBoardCommentRepository.saveAndFlush(freeBoardComment);
        FreeBoardComment freeBoardComment2 = FreeBoardComment.builder()
                .user(commenter2)
                .parentComment(freeBoardComment)
                .content("너무 과격한거 아닌가요")
                .freeBoard(targetBoard)
                .build();
        freeBoardCommentRepository.saveAndFlush(freeBoardComment2);

    }


//    public void addPlatformAndCourseProvider(){
//        Platform youtube = Platform.builder()
//                .name("Youtube")
//                .build();
//        platformRepository.save(youtube);
//        CourseProvider codingApple = CourseProvider.builder()
//                .name("코딩애플")
//                .platform(youtube)
//                .channelId("UCSLrpBAzOVGHQ5EmxnUg")
//                .build();
//        courseProviderRepository.save(codingApple);
//        addCourse(codingApple);
//    }
//    public void addCourse(CourseProvider courseProvider){
//
//        Course course1 = Course.builder()
//                .title("2022 코딩애플 리액트 강의")
//                .playlistId("PLfLgtT94nNq0qTRmUzQv4lI4pnP")
//                .thumbnail("path/to/image")
//                .courseProvider(courseProviderRepository.getByChannelId("UCSLrpBAzOVGHQ5EmxnUg"))
//                .build();
//        courseRepository.save(course1);
//        addLecture(course1);
//
//
//        Course course2 = Course.builder()
//                .title("쉽게알려주는 플러터 강의임")
//                .playlistId("PLfLgtT94nNq1izN517iPX4WXH3C")
//                .thumbnail("path/to/image")
//                .courseProvider(courseProviderRepository.getByChannelId("UCSLrpBAzOVGHQ5EmxnUg"))
//                .build();
//        courseRepository.save(course2);
//
//        Course course3 = Course.builder()
//                .title("웹개발로 배우는 자바스크립트 기초")
//                .playlistId("PLfLgtT94nNq0svzReYKbZRuv_-NK")
//                .thumbnail("path/to/image")
//                .courseProvider(courseProviderRepository.getByChannelId("UCSLrpBAzOVGHQ5EmxnUg"))
//                .build();
//        courseRepository.save(course3);
//
//    }
//
//    public void addLecture(Course course){
//
//        Lecture lecture1 = Lecture.builder()
//                .course(course)
//                .thumbnail("https://i.ytimg.com/vi/8rv8GTgYYrU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkEZOU_6VFhbZRGItvHRk0yAmcUQ")
//                .title("진짜 웹개발로 배우는 실용 자바스크립트 1강 : 셀렉터 selector")
//                .content("전체강의와 예제코드는 여기서 이용가능합니다")
//                .videoId("8rvTgYY123")
//                .length(676)
//                .build();
//        lectureRepository.save(lecture1);
////        addNote(lecture1);
//    }

    public void addNote(Lecture lecture){

        User user1 = userRepository.findById(1).get();
        Note note = Note.builder()
                .lecture(lecture)
                .user(user1)
                .build();
        noteRepository.saveAndFlush(note);

    }

    public void addStudyAndMember(){
        Study study1 = Study.builder()
                .title("리액트 스터디")
                .content("널널하게 하실 분 구해요~ 매주 목 금 저녁 ㄱㄱ")
                .isPublic(true)
                .userLimit(4)
                .build();
        studyRepository.save(study1);

        User user1 = userRepository.findById(1).get();
        User user2 = userRepository.findById(2).get();
        User user3 = userRepository.findById(3).get();

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

        Course course1 = courseRepository.findByTitle("2022 코딩애플 리액트 강의");
        Course course2 = courseRepository.findByTitle("쉽게알려주는 플러터 강의임");
        Course course3 = courseRepository.findByTitle("웹개발로 배우는 자바스크립트 기초");
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

}
