# 🌐 쓰임 링크 : [http://i8a110.p.ssafy.io](http://i8a110.p.ssafy.io/)

# 🎞 소개 영상 보기 :

# 📆 프로젝트 진행 기간

2023/01/16 ~ 2023/02/16

# 📖 쓰임은 무엇인가요?

## ✊WHY? - 쓰임의 비전

**한국의 모든 취준생의 고독을 해결하고 싶다!!**

## 🤔HOW? - 쓰임의 방향

취준생이라면 누구든, **같은 목표를 가진 사람들과 함께 교류**할 수 있는 곳을 만들고 싶었어요

취준에 있어 전의를 상실하지 않도록 **동기부여**가 되는 곳을 만들고 싶었어요

선례가 되는 현업자의 조언 또는 같은 공부를 하는 다른 취준생들을 바탕으로 **취준을 위해 필요한 것들을 다시금 확인**하고 싶었어요

## 🙌WHAT? - 쓰임의 가치

**온라인 강의라는 공통 관심사를 통해 교류, 동기부여, 성장할 수 있는 플랫폼**

# 💜 주요 기능

---

### 🔎강좌 목록 및 검색

나에게 도움이 되는 **강좌를 찾고 분류 별로 모아볼 수 있어요**

### ❤강좌 좋아요 및 저장

내가 좋아하는 강좌나 보고싶은 강좌를 **좋아요 표시할 수 있어요**

**좋아요를 표시한 강좌**들은 **마이페이지에서 모아볼 수 있어요**

### 📽강좌 플레이어

유튜브 영상을 **큰 화면으로 시청할 수 있어요**

### 🗒강좌 플레이어 메모

강의를 듣다가 남겨두고 싶은 메모가 있다면 **비디오 플레이어의 사이드 메뉴**에서 **메모를 작성할 수 있어요**

**마크다운 형식**으로 깔끔하게 정리한 메모를 저장하고 필요할 때마다 **마이페이지에서 언제든 확인할 수 있어요**

### 🙋‍♀️강좌 플레이어 질문 게시판

강좌를 듣다가 궁금한게 생겼을 때 나와 같은 궁금증이 생긴 사람들의 **질문을 찾아볼 수 있어요**

강좌를 들으며 궁금한게 생기면 **즉시 질문을 남길 수 있고 답변을 받을 수 있어요**

### 👣사용자 히스토리

내가 **최근 수강한 강좌와 강의들이 기록**되어 **마이페이지에서 확인할 수 있어요**

최근 듣던 강의를 이어서 듣는다면 **이전 플레이어를 종료한 위치부터 이어서 시청할 수 있어요**

### ✒스터디 생성 및 모집

같은 강좌를 듣거나 같은 분야를 공부하는 사람들과 함께 **스터디를 진행할 수 있어요**

내가 공부하고 싶은 **강좌들을 모아 커리큘럼으로 등록**하고 스터디원을 모을 수 있어요

### 👨‍👧‍👦스터디 커뮤니티

**스터디 커뮤니티에 글을 남겨** 스터디원들과 간단한 대화가 가능해요

### 📡실시간 강의 시청 및 채팅

스터디원들과 **실시간으로 강의를 시청할 수 있어요**

강의 영상 싱크는 스터디원 모두와 동기화 되어 **같은 시간대의 영상을 동시에 시청할 수 있어요**

강의를 시청하며 궁금한 것이 생기면 **스터디원들과 실시간으로 공유하고 채팅할 수 있어요**

### 📼스터디 히스토리

스터디원들과 함께 **실시간으로 시청했던 강의의 내역을 볼 수 있어요**

### ❔질문 게시판

쓰임을 사용하는 사람들이 강의를 들으며 궁금했던 **질문들을 모아볼 수 있어요**

**질문에 답변을 남긴다면** 질문자에게 큰 도움이 될 수 있어요

### 🎤자유 게시판

쓰임을 사용하는 **모든 사람들에게 글을 게시할 수 있어요**

**특정 강의와 관련 없이 궁금한게 생긴다면,** 자유게시판에 글을 작성해볼 수 있어요

**댓글을 남겨** 게시글에 대한 생각을 표현해주세요

### 💑사용자 팔로우

**내가 친해지고 싶은 사람을 팔로우**하고, **나에게 관심있는 사람에게 팔로잉** 받을 수 있어요

# ✔ 주요 기술

---

**Backend - Spring**

Spring Boot

Spring Web

Spring WebSocket with STOMP

JPA

JWT

Spring Security

Spring Data with Swagger

Google Cloud Storage

Youtube API

**Frontend**

NginX

React

Vite

Zustand

Tailwind

PostCSS

**Database**

MySQL 8

**CI/CD**

AWS EC2

Jenkins

Docker

Docker Compose

# ✔ 프로젝트 아키텍쳐

---

![architecture](docs/images/architecture.png)

# ✔ 프로젝트 파일 구조

---

### Backend

```
BACKEND\STUDYMOIM\SRC\MAIN
├─java
│  └─com
│      └─ssafy
│          └─peace
│              │  DataLoader.java
│              │  PeaceApplication.java
│              │
│              ├─api
│              │      AlarmController.java
│              │      AuthController.java
│              │      ChatController.java
│              │      CourseCategoryController.java
│              │      CourseController.java
│              │      CurriculumController.java
│              │      FreeBoardController.java
│              │      GCSController.java
│              │      LectureController.java
│              │      MessageController.java
│              │      NoteController.java
│              │      QuestionBoardController.java
│              │      StudyController.java
│              │      UserController.java
│              │      VideoController.java
│              │      YoutubeApiController.java
│              │
│              ├─config
│              │      SecurityConfig.java
│              │      Swagger2Config.java
│              │      WebsocketConfig.java
│              │
│              ├─dto
│              │  │  AlarmDto.java
│              │  │  ChatMessageDto.java
│              │  │  CourseCategoryDto.java
│              │  │  CourseDto.java
│              │  │  CourseProviderDto.java
│              │  │  CourseTypeDto.java
│              │  │  CurriculumDto.java
│              │  │  FreeBoardCommentDto.java
│              │  │  FreeBoardDto.java
│              │  │  LectureDto.java
│              │  │  MessageDto.java
│              │  │  NoteDto.java
│              │  │  QuestionBoardCommentDto.java
│              │  │  QuestionBoardDto.java
│              │  │  StudyCommunityDto.java
│              │  │  StudyDto.java
│              │  │  StudyHistoryDto.java
│              │  │  StudyMemberDto.java
│              │  │  StudyRequestDto.java
│              │  │  UploadReqDto.java
│              │  │  UserDto.java
│              │  │  UserLikeCategoryDto.java
│              │  │
│              │  └─auth
│              │          BaseResponseBody.java
│              │          KakaoUserInfo.java
│              │          Principal.java
│              │          UserLoginPostRes.java
│              │          UserRegisterPostReq.java
│              │
│              ├─entity
│              │  │  Alarm.java
│              │  │  Banner.java
│              │  │  Course.java
│              │  │  CourseCategory.java
│              │  │  CourseProvider.java
│              │  │  CourseType.java
│              │  │  Curriculum.java
│              │  │  Follow.java
│              │  │  FreeBoard.java
│              │  │  FreeBoardComment.java
│              │  │  Lecture.java
│              │  │  Message.java
│              │  │  Note.java
│              │  │  Notice.java
│              │  │  Platform.java
│              │  │  QuestionBoard.java
│              │  │  QuestionBoardComment.java
│              │  │  Study.java
│              │  │  StudyCommunity.java
│              │  │  StudyHistory.java
│              │  │  StudyMember.java
│              │  │  StudyRequest.java
│              │  │  User.java
│              │  │  UserHistory.java
│              │  │  UserLikeCategory.java
│              │  │  UserLikeCourse.java
│              │  │
│              │  └─key
│              │          CurriculumId.java
│              │          NoteId.java
│              │          StudyMemberId.java
│              │          UserLikeCategoryId.java
│              │          UserLikeCourseId.java
│              │
│              ├─exception
│              │      TokenValidationFailureException.java
│              │
│              ├─filter
│              │      JwtAuthenticationFilter.java
│              │
│              ├─listener
│              │      WebSocketEventListener.java
│              │
│              ├─repository
│              │      AlarmRepository.java
│              │      CourseCategoryRepository.java
│              │      CourseProviderRepository.java
│              │      CourseRepository.java
│              │      CourseTypeRepository.java
│              │      CurriculumRepository.java
│              │      FollowRepository.java
│              │      FreeBoardCommentRepository.java
│              │      FreeBoardRepository.java
│              │      LectureRepository.java
│              │      MessageRepository.java
│              │      NoteRepository.java
│              │      NoticeRepository.java
│              │      PlatformRepository.java
│              │      QuestionBoardCommentRepository.java
│              │      QuestionBoardRepository.java
│              │      StudyCommunityRepository.java
│              │      StudyHistoryRepository.java
│              │      StudyMemberRepository.java
│              │      StudyRepository.java
│              │      StudyRequestRepository.java
│              │      UserHistoryRepository.java
│              │      UserLikeCategoryRepository.java
│              │      UserLikeCourseRepository.java
│              │      UserRepository.java
│              │
│              ├─service
│              │  │  AlarmService.java
│              │  │  CourseCategoryService.java
│              │  │  CourseService.java
│              │  │  CourseTypeService.java
│              │  │  CurriculumService.java
│              │  │  FreeBoardService.java
│              │  │  GCSService.java
│              │  │  LectureService.java
│              │  │  MessageService.java
│              │  │  NoteService.java
│              │  │  QuestionBoardService.java
│              │  │  StudyService.java
│              │  │  UserService.java
│              │  │  VideoService.java
│              │  │  YoutubeApiService.java
│              │  │
│              │  └─auth
│              │          JwtTokenService.java
│              │          KakaoAuthService.java
│              │          UserDetailService.java
│              │
│              └─util
│                      JwtTokenUtil.java
│                      ResponseBodyWriteUtil.java
│                      SecurityUtil.java
│                      WebMvcConfig.java
│
└─resources
    │  application.yml
    │  category.json
    │  course.json
    │  lecture.json
    │  platform.json
    │  provider.json
    │  studymoim-gcs.json
    │
    ├─static
    └─templates
```

### Frontend

```
FRONTEND\PEACE_STUDYMOIM\SRC
│  App.css
│  App.jsx
│  index.css
│  main.jsx
│
├─assets
│      logo.png
│      logotwo.png
│      react.svg
│
├─components
│  ├─communitydetail
│  │      ButtonModifyDelete.jsx
│  │      CommunityComment.jsx
│  │      CommunityCommentForm.jsx
│  │      QuestionComment.jsx
│  │      QuestionCommentForm.jsx
│  │      QuestionLectureShort.jsx
│  │
│  ├─communitypages
│  │      ArticleCreateForm.jsx
│  │      ArticleEditForm.jsx
│  │      FreeQuestion.jsx
│  │      FreeRoot.jsx
│  │      LectureQuestion.jsx
│  │      QuestionEditForm.jsx
│  │      QuestionRoot.jsx
│  │      TempPageForArticle.jsx
│  │
│  ├─coursedetail
│  │      CourseBanner.jsx
│  │      CourseQuestion.jsx
│  │      LectureShort.jsx
│  │      StudyShort.jsx
│  │
│  ├─coursepages
│  │      CourseTag.jsx
│  │      RecommendBanner.jsx
│  │
│  ├─field
│  │      FieldButton.jsx
│  │
│  ├─mainpages
│  │      MainCourse.jsx
│  │      MainFreeArticle.jsx
│  │      MainLectureQuestion.jsx
│  │      MainLogin.css
│  │      MainLogIn.jsx
│  │      MainMyStudy.jsx
│  │      MainNotLogin.css
│  │      MainNotLogIn.jsx
│  │      MainStudy.jsx
│  │
│  ├─mypages
│  │      FollowerList.jsx
│  │      FollowingList.jsx
│  │      MemoCourse.jsx
│  │      MemoItem.jsx
│  │      MemoLecture.jsx
│  │      MemoModal.jsx
│  │      MyPageArticle.jsx
│  │      MyPageArticleItem.jsx
│  │      MyPageCourse.jsx
│  │      MyPageCourseItem.jsx
│  │      MyPageLecture.jsx
│  │      MyPageLectureItem.jsx
│  │      MyPageLeftBar.jsx
│  │      MyPageLikeCourse.jsx
│  │      MyPageLikeCourseItem.jsx
│  │      MyPageMemo.jsx
│  │      MyPageMine.jsx
│  │      MyPageModal.jsx
│  │      MyPageStatic.jsx
│  │      MyPageTagItem.jsx
│  │      MyPageTempPage.jsx
│  │      MyPageUpdateForm.jsx
│  │      MyPageYours.jsx
│  │      StudyList.jsx
│  │      StudyListItem.jsx
│  │
│  ├─NavBar
│  │      BellIcon.jsx
│  │      LoginModal.jsx
│  │      NavBarLogIn.jsx
│  │      NavBarLoginMd.jsx
│  │      NavBarNotLogIn.jsx
│  │      NavBarNotLoginMd.jsx
│  │      NavBarRoot.jsx
│  │      NavBarRouter.jsx
│  │      NavBarRouterMd.jsx
│  │      NavPagination.jsx
│  │      RingModal.jsx
│  │      RingModalItem.jsx
│  │
│  ├─overall
│  │      CourseGaro.jsx
│  │      DeleteArticleModal.jsx
│  │      DeleteModal.jsx
│  │      EscForClose.jsx
│  │      Footer.jsx
│  │      ScrollToTop.jsx
│  │      Tag.jsx
│  │      TagList.jsx
│  │      TempPage.jsx
│  │
│  ├─studydetail
│  │      CurriculumUpdateModal.jsx
│  │      LectureProgress.jsx
│  │      LectureProgressList.jsx
│  │      LectureTiny.jsx
│  │      MemberManage.jsx
│  │      NoticeModal.jsx
│  │      NowPlayStudy.jsx
│  │      StudyIntroduceBanner.jsx
│  │      StudyMemberCommunity.jsx
│  │      StudyMemberCommunityComment.jsx
│  │      StudyNotice.jsx
│  │      StudyPageCourseItemSmall.jsx
│  │      StudyPageLectureList.jsx
│  │
│  ├─studypages
│  │      CourseSearchBar.jsx
│  │      StudyMakeForm.jsx
│  │      StudyRecruitItem.jsx
│  │      StudyRecruitModalNotOpen.jsx
│  │      StudyRecruitModalOpen.jsx
│  │      StudySearch.jsx
│  │      StudyUpdateForm.jsx
│  │
│  └─studyplayer
│          PlayerMemo.jsx
│          PlayerQuestion.jsx
│          PlayerQuestionComment.jsx
│          PlayerQuestionCommentCreate.jsx
│          PlayerQuestionCommentList.jsx
│          PlayerQuestionDetail.jsx
│          PlayerQuestionList.jsx
│          PlayerQuestionMakeForm.jsx
│          PlayingVideoFrame.jsx
│          PlayingVideoFrameSolo.jsx
│
├─hooks
│      getArticles.jsx
│      getQuestions.jsx
│      useFetch.jsx
│      useFetchObject.jsx
│      useToken.jsx
│
├─pages
│      CommunityDetailRoot.jsx
│      CommunityMainRoot.jsx
│      CommunityQuestionDetailRoot.jsx
│      CourseDetailRoot.jsx
│      CourseMainRoot.jsx
│      EmptyPage.jsx
│      FieldPage.jsx
│      KakaoLoginRedirect.jsx
│      LecturePlayerMainRoot.jsx
│      LogInMainRoot.jsx
│      MainPageRoot.css
│      MainPageRoot.jsx
│      MyPageRealRoot.jsx
│      MyPageRoot.jsx
│      StudyDetailMainPage.jsx
│      StudyMakePage.jsx
│      StudyPlayerMainRoot.jsx
│      StudyRecruitDetailPage.css
│      StudyRecruitDetailPage.jsx
│      StudyRecruitMainPage.jsx
│      StudyUpdatePage.jsx
│
└─zustand
        articles.js
        questions.js
        store.js
        token.js
```

# ✔ 협업

---

### Notion 을 통한 협업

- 브레인스토밍, 기능 구현, 링크 공유 등 팀원과 함께 작성해야 할 문서가 있을때 Notion을 활용했어요
- 컨벤션, 오늘의 목표, 마일스톤, 팀 규칙 등 팀원과 공유할 정보가 있을 때 Notion에 적극적으로 기록하여 관리했어요

### Jira 를 통한 협업

- 프로젝트를 진행하며 1주당 하나의 스프린트, 총 5개의 스프린트를 진행했어요
- 한 주의 시작마다 인당 총 40시간의 이슈를 생성하고 스프린트를 시작했어요
- 1~4시간의 이슈를 생성하여 작업을 시작할 때 마다 해당 이슈를 진행중 표시 했어요
- 작업이 완료 되면 해당 이슈를 완료 표시 한 후, 다음 작업을 진행했어요
- 한 주의 마지막에 스프린트를 종료하여 리뷰하는 시간을 가졌어요

### Gitlab 을 통한 협업

- master, develop, feature의 git flow 브랜칭 전략을 통해 작업 브랜치를 분할 관리 했어요
- 새로운 기능 개발이나 버그픽스를 위해 feature 브랜치를 사용했어요
- 개발 현황을 병합하고 새로운 개발 브랜치를 분기하기 위해 develop 브랜치를 사용했어요
- 서비스 릴리즈 전, 진행현황 명세나 필요 문서를 남기고 공유하기 위해 master 브랜치를 사용했어요

### Discord 를 통한 협업

- 근무 외 추가적인 작업을 위해 DIscord에 접속하여 팀원과 협업을 이어나갔어요

# ✔ 팀원 역할 분배

---

### 박서영 (팀장)

`Backend` `GCS`

Repository 설계

Study 도메인 API 개발

DataLoader 개발

GCS를 활용한 이미지 저장 구현

프레젠테이션 담당

### 김동준

`Frontend` `Docs`

component 초기 구조 생성

초기 기본 디자인 형성 + 라우터 구조 정립

네브바, 스터디플레이어, 커뮤니티 기능 구현

기본 커스텀훅 + 상태관리 기능 구현

사용자 경험 향상

회의록 작성

### 배서연

`Backend` `Frontend`

서비스 디자인 총괄

로그인, 알림, 회원정보 기능 풀스택 개발

마이페이지 기능 개발

검색/정렬 기능 총괄 풀스택 개발

프레젠테이션 디자인 총괄

### 이태희

`Backend` `Devops`

DTO 설계

User, Articles 도메인 API 개발

비디오 싱크, 채팅 WebSocket 서비스 개발

EC2 상 운영 환경 설계 및 컨테이너 구축

Jenkins 배포 자동화

### 정준호

`Backend` `Database`

Entity 설계

Course, Lecture, History 도메인 API 개발

History 기반 통계 데이터 추출

Youtube 강의 라벨링 자동화

DataLoader 개발

### 정채린

`Frontend`

스터디 구인, 스터디 페이지 기능 구현

초기 로그인 및 추천 강좌 구현 

메인페이지 구현 

캐러샐, Markdown 적용

와이어프레임 총괄
