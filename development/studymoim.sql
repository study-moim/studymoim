-- DB 세팅
CREATE DATABASE IF NOT EXISTS studymoim;
use studymoim;

-- 기존 테이블 날리기
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `course`;
DROP TABLE IF EXISTS `course_category`;
DROP TABLE IF EXISTS `lecture`;
DROP TABLE IF EXISTS `notice`;
DROP TABLE IF EXISTS `course_type`;
DROP TABLE IF EXISTS `study`;
DROP TABLE IF EXISTS `curriculum`;
DROP TABLE IF EXISTS `user_history`;
DROP TABLE IF EXISTS `study_member`;
DROP TABLE IF EXISTS `course_provider`;
DROP TABLE IF EXISTS `banner`;
DROP TABLE IF EXISTS `study_history`;
DROP TABLE IF EXISTS `message`;
DROP TABLE IF EXISTS `user_like_course`;
DROP TABLE IF EXISTS `follow`;
DROP TABLE IF EXISTS `channel`;
DROP TABLE IF EXISTS `platform`;
DROP TABLE IF EXISTS `study_request`;
DROP TABLE IF EXISTS `study_community`;
DROP TABLE IF EXISTS `note`;
DROP TABLE IF EXISTS `free_board`;
DROP TABLE IF EXISTS `free_board_comment`;
DROP TABLE IF EXISTS `question_board`;
DROP TABLE IF EXISTS `question_board_comment`;
DROP TABLE IF EXISTS `alarm`;
DROP TABLE IF EXISTS `user_like_category`;

-- 테이블 생성, 초기 세팅
CREATE TABLE IF NOT EXISTS `user` (
	`user_id`					int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`email`						varchar(50)		NOT NULL,
	`password`					varchar(20)		NOT NULL,
	`nickname`					varchar(10)		NOT NULL DEFAULT "unknown",
	`save_name`					varchar(255)	NULL,
	`register_date`				timestamp		NOT NULL DEFAULT now(),
	`last_access_time`			timestamp		NULL,
	`is_quit`					boolean			NOT NULL DEFAULT false,
	`quit_time`					timestamp		NULL
);


INSERT INTO `user` (email, password, nickname)  VALUES ("ssafy1@ssafy.com", "ssafy1", "김싸피");
INSERT INTO `user` (email, password, nickname, last_access_time)  VALUES ("ssafy2@ssafy.com", "ssafy2", "박싸피", now());
INSERT INTO `user` (email, password, nickname, save_name, last_access_time)  VALUES ("ssafy3@ssafy.com", "ssafy3", "이싸피", "ssafy3@ssafy.com_image1_2023-01-31", now());
INSERT INTO `user` (email, password, nickname, save_name, last_access_time, is_quit, quit_time)  VALUES ("ssafy4@ssafy.com", "ssafy4", "정싸피", "ssafy4@ssafy.com_image3_2023-01-31", now(), 1, now());



CREATE TABLE IF NOT EXISTS `course` (
	`course_id`					int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title`						varchar(255)	NOT NULL,
	`content`					text			NOT NULL,
	`last_update_date`			timestamp		NOT NULL,
	`is_deleted`				boolean			NOT NULL DEFAULT false,
	`course_provider_id`		int				NOT NULL
);

INSERT INTO `course` (title, content, last_update_date, course_provider_id)  VALUES ("스프링부트 기초", "쉽게 배우는 스프링", now(), 1);
INSERT INTO `course` (title, content, last_update_date, course_provider_id, is_deleted)  VALUES ("스프링부트 심화", "현업 스프링", now(), 1, true);
INSERT INTO `course` (title, content, last_update_date, course_provider_id)  VALUES ("리액트 기초", "쉽게 배우는 리액트", now(), 2);
INSERT INTO `course` (title, content, last_update_date, course_provider_id, is_deleted)  VALUES ("리액트 심화", "현업 리액트", now(), 2, true);



CREATE TABLE IF NOT EXISTS `course_category` (
	`course_category_id`		int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name`						varchar(10)		NOT NULL,
	`parent_category_id`		int				NULL
);

INSERT INTO `course_category` (name)  VALUES ("프론트엔드");
INSERT INTO `course_category` (name)  VALUES ("백엔드");
INSERT INTO `course_category` (name, parent_category_id)  VALUES ("뷰", 1);
INSERT INTO `course_category` (name, parent_category_id)  VALUES ("리액트", 1);
INSERT INTO `course_category` (name, parent_category_id)  VALUES ("스프링", 2);
INSERT INTO `course_category` (name, parent_category_id)  VALUES ("장고", 2);



CREATE TABLE IF NOT EXISTS `lecture` (
	`lecture_id`				int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title`						varchar(255)	NOT NULL,
	`length`					smallint		NOT NULL,
	`thumbnail`					varchar(255)	NOT NULL,
	`content`					text			NOT NULL,
	`url`						varchar(255)	NOT NULL,
	`is_deleted`				boolean			NOT NULL DEFAULT false,
	`course_id`					int				NOT NULL
);

INSERT INTO `lecture` (title, length, thumbnail, content, url, course_id)  VALUES ("스프링부트 기초 1강", 60*24 + 30, "imagelink1", "쉽게 머시기머시기 기초 1강 내용", "영상url", 1);
INSERT INTO `lecture` (title, length, thumbnail, content, url, course_id)  VALUES ("스프링부트 기초 2강", 60*24 + 30, "imagelink2", "쉽게 머시기머시기 기초 2강 내용", "영상url", 1);
INSERT INTO `lecture` (title, length, thumbnail, content, url, course_id)  VALUES ("스프링부트 심화 1강", 60*24 + 30, "imagelink3", "쉽게 머시기머시기 심화 1강 내용", "영상url", 2);
INSERT INTO `lecture` (title, length, thumbnail, content, url, course_id, is_deleted)  VALUES ("스프링부트 심화 2강", 60*24 + 30, "imagelink4", "쉽게 머시기머시기 심화 2강 내용", "영상url", 2, true);
INSERT INTO `lecture` (title, length, thumbnail, content, url, course_id)  VALUES ("리액트 기초 1강", 60*24 + 30, "imagelink5", "쉽게 머시기머시기 기초 1강 내용", "영상url", 3);
INSERT INTO `lecture` (title, length, thumbnail, content, url, course_id)  VALUES ("리액트 기초 2강", 60*24 + 30, "imagelink6", "쉽게 머시기머시기 기초 2강 내용", "영상url", 3);
INSERT INTO `lecture` (title, length, thumbnail, content, url, course_id)  VALUES ("리액트 심화 1강", 60*24 + 30, "imagelink7", "쉽게 머시기머시기 심화 1강 내용", "영상url", 4);
INSERT INTO `lecture` (title, length, thumbnail, content, url, course_id, is_deleted)  VALUES ("리액트 심화 2강", 60*24 + 30, "imagelink8", "쉽게 머시기머시기 심화 2강 내용", "영상url", 4, true);



CREATE TABLE IF NOT EXISTS `notice` (
	`notice_id`					int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title`						varchar(30)		NOT NULL,
	`content`					text			NOT NULL,
	`publish_time`				timestamp		NOT NULL DEFAULT now(),
	`user_id`					int				NOT NULL
);

-- 유저 링크 끊고 관리자 테이블 하나 만드는게 맞는듯?
INSERT INTO `notice` (title, content, user_id)  VALUES ("공지사항1 제목", "공지사항1 내용", 1);
INSERT INTO `notice` (title, content, user_id)  VALUES ("공지사항2 제목", "공지사항2 내용", 1);



CREATE TABLE IF NOT EXISTS `course_type` (
	`course_type_id`			int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`course_id`					int				NOT NULL,
	`course_category_id`		int				NOT NULL
);

-- 강좌 하나에 여러 태그 달기?
INSERT INTO `course_type` (course_id, course_category_id)  VALUES (1, 5); -- 강좌1 스프링
INSERT INTO `course_type` (course_id, course_category_id)  VALUES (2, 5);
INSERT INTO `course_type` (course_id, course_category_id)  VALUES (3, 4); -- 강좌3 리액트
INSERT INTO `course_type` (course_id, course_category_id)  VALUES (4, 4);



CREATE TABLE IF NOT EXISTS `study` (
	`study_id`					int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`creation_time`				timestamp		NOT NULL DEFAULT now(),
	`title`						varchar(30)		NOT NULL,
	`content`					text			NOT NULL,
	`save_name`					varchar(255)	NULL,
	`is_open`					boolean			NOT NULL DEFAULT true,
	`user_limit`				int				NOT NULL,
	`is_public`					boolean			NULL,
	`notice`					varchar(100)	NULL,
	`is_finished`				boolean			NOT NULL DEFAULT false
);

INSERT INTO `study` (title, content, user_limit, notice)  VALUES ("스프링 스터디1", "스프링 스터디 내용", 5, "공지내용1");
INSERT INTO `study` (title, content, user_limit, is_open, save_name)  VALUES ("스프링 스터디2", "스프링 스터디 내용", 3, false, "스터디 이미지 경로1");
INSERT INTO `study` (title, content, user_limit, notice)  VALUES ("리액트 스터디1", "리액트 스터디 내용", 5, "공지내용2");
INSERT INTO `study` (title, content, user_limit, is_open, save_name, is_finished)  VALUES ("리액트 스터디2", "리액트 스터디 내용", 3, false, "스터디 이미지 경로2", true);
INSERT INTO `study` (title, content, user_limit, notice)  VALUES ("풀스택 스터디1", "풀스택 스터디 내용", 5, "공지내용3");
INSERT INTO `study` (title, content, user_limit, is_open, save_name)  VALUES ("풀스택 스터디2", "풀스택 스터디 내용", 3, false, "스터디 이미지 경로3");



CREATE TABLE IF NOT EXISTS `curriculum` (
	`study_id`					int				NOT NULL,
	`course_id`					int				NOT NULL,
	`order`						tinyint			NULL
);

ALTER TABLE `curriculum` ADD CONSTRAINT `PK_CURRICULUM` PRIMARY KEY (
	`study_id`,
	`course_id`
);

-- order 순서 그냥 숫자로 해도 괜찮을까 싶은 생각. 중간에 삭제하면 꼬이지 않을까
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (1, 1, 1);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (1, 2, 2);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (2, 2, 1);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (3, 3, 1);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (3, 4, 2);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (4, 4, 1);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (5, 1, 1);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (5, 2, 2);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (5, 3, 3);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (6, 3, 1);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (6, 4, 2);
INSERT INTO `curriculum` (study_id, course_id, `order`)  VALUES (6, 1, 3);



CREATE TABLE IF NOT EXISTS `user_history` (
	`user_history_id`			int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`start_timeline`			int				NOT NULL DEFAULT 0,
	`end_timeline`				int				NULL,
	`start_time`				timestamp		NOT NULL DEFAULT now(),
	`end_time`					timestamp		NULL,
	`lecture_id`				int				NOT NULL,
	`user_id`					int				NOT NULL
);

INSERT INTO `user_history` (start_timeline, end_timeline, end_time, lecture_id, user_id)  VALUES (0, 60*18 + 30, now(), 1, 1);
INSERT INTO `user_history` (start_timeline, end_timeline, end_time, lecture_id, user_id)  VALUES (60*18 + 30, 60*23 + 30, now(), 1, 1);
INSERT INTO `user_history` (start_timeline, lecture_id, user_id)  VALUES (0, 2, 1);
INSERT INTO `user_history` (start_timeline, end_timeline, end_time, lecture_id, user_id)  VALUES (0, 60*18 + 30, now(), 4, 2);
INSERT INTO `user_history` (start_timeline, end_timeline, end_time, lecture_id, user_id)  VALUES (60*18 + 30, 60*23 + 30, now(), 4, 2);
INSERT INTO `user_history` (start_timeline, lecture_id, user_id)  VALUES (0, 5, 2);
INSERT INTO `user_history` (start_timeline, end_timeline, end_time, lecture_id, user_id)  VALUES (0, 60*18 + 30, now(), 6, 3);
INSERT INTO `user_history` (start_timeline, end_timeline, end_time, lecture_id, user_id)  VALUES (0, 60*23 + 30, now(), 3, 3);
INSERT INTO `user_history` (start_timeline, end_timeline, end_time, lecture_id, user_id)  VALUES (0, 60*18 + 30, now(), 1, 4);
INSERT INTO `user_history` (start_timeline, end_timeline, end_time, lecture_id, user_id)  VALUES (0, 60*3 + 30, now(), 3, 4);



CREATE TABLE IF NOT EXISTS `study_member` (
	`user_id`					int				NOT NULL,
	`study_id`					int				NOT NULL,
	`member_role`				boolean			NULL,
	`is_banned`					boolean			NOT NULL DEFAULT false
);

ALTER TABLE `study_member` ADD CONSTRAINT `PK_STUDY_MEMBER` PRIMARY KEY (
	`user_id`,
	`study_id`
);

INSERT INTO `study_member` (user_id, study_id, member_role)  VALUES (1, 1, true);
INSERT INTO `study_member` (user_id, study_id, member_role)  VALUES (2, 1, false);
INSERT INTO `study_member` (user_id, study_id, member_role, is_banned)  VALUES (4, 1, false, true);
INSERT INTO `study_member` (user_id, study_id, member_role)  VALUES (2, 2, true);
INSERT INTO `study_member` (user_id, study_id, member_role)  VALUES (3, 2, false);
INSERT INTO `study_member` (user_id, study_id, member_role, is_banned)  VALUES (4, 2, false, true);
INSERT INTO `study_member` (user_id, study_id, member_role)  VALUES (3, 3, true);
INSERT INTO `study_member` (user_id, study_id, member_role, is_banned)  VALUES (4, 3, false, true);
INSERT INTO `study_member` (user_id, study_id, member_role)  VALUES (4, 4, true);
INSERT INTO `study_member` (user_id, study_id, member_role)  VALUES (1, 5, true);
INSERT INTO `study_member` (user_id, study_id, member_role)  VALUES (1, 6, true);



CREATE TABLE IF NOT EXISTS `course_provider` (
	`course_provider_id`		int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`url`						varchar(255)	NOT NULL,
	`platform_id`				int				NOT NULL,
	`channel_id`				int				NOT NULL
);

INSERT INTO `course_provider` (url, platform_id, channel_id)  VALUES ("url1", 1, 1);
INSERT INTO `course_provider` (url, platform_id, channel_id)  VALUES ("url2", 1, 2);
INSERT INTO `course_provider` (url, platform_id, channel_id)  VALUES ("url3", 1, 3);



CREATE TABLE IF NOT EXISTS `banner` (
	`banner_id`					int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`save_name`					varchar(255)	NOT NULL,
	`url`						varchar(255)	NOT NULL
);

INSERT INTO `banner` (save_name, url)  VALUES ("이미지 이름1", "url1");
INSERT INTO `banner` (save_name, url)  VALUES ("이미지 이름2", "url2");
INSERT INTO `banner` (save_name, url)  VALUES ("이미지 이름3", "url3");



CREATE TABLE IF NOT EXISTS `study_history` (
	`study_history_id`			int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`start_timeline`			int				NOT NULL DEFAULT 0,
	`end_timeline`				int				NULL,
	`start_time`				timestamp		NOT NULL DEFAULT now(),
	`end_time`					timestamp		NULL,
	`lecture_id`				int				NOT NULL,
	`study_id`					int				NOT NULL
);

INSERT INTO `study_history` (start_timeline, end_timeline, end_time, lecture_id, study_id)  VALUES (0, 60*2 + 30, now(), 1, 1);
INSERT INTO `study_history` (start_timeline, end_timeline, end_time, lecture_id, study_id)  VALUES (60*2 + 30, 60*12 + 30, now(), 1, 1);
INSERT INTO `study_history` (start_timeline, lecture_id, study_id)  VALUES (0, 2, 1);
INSERT INTO `study_history` (start_timeline, end_timeline, end_time, lecture_id, study_id)  VALUES (0, 60*3 + 30, now(), 4, 2);
INSERT INTO `study_history` (start_timeline, end_timeline, end_time, lecture_id, study_id)  VALUES (60*3 + 30, 60*18 + 30, now(), 4, 2);
INSERT INTO `study_history` (start_timeline, lecture_id, study_id)  VALUES (0, 5, 2);
INSERT INTO `study_history` (start_timeline, end_timeline, end_time, lecture_id, study_id)  VALUES (0, 60*18 + 30, now(), 6, 3);
INSERT INTO `study_history` (start_timeline, end_timeline, end_time, lecture_id, study_id)  VALUES (0, 60*23 + 30, now(), 3, 3);
INSERT INTO `study_history` (start_timeline, end_timeline, end_time, lecture_id, study_id)  VALUES (0, 60*18 + 30, now(), 1, 4);
INSERT INTO `study_history` (start_timeline, end_timeline, end_time, lecture_id, study_id)  VALUES (0, 60*3 + 30, now(), 3, 4);



CREATE TABLE IF NOT EXISTS `message` (
	`message_id`				int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`is_checked`				boolean			NOT NULL DEFAULT false,
	`content`					varchar(255)	NOT NULL,
	`from_user_id`				int				NOT NULL,
	`to_user_id`				int				NOT NULL
);

INSERT INTO `message` (content, from_user_id, to_user_id)  VALUES ("메세지 내용1", 1, 2);
INSERT INTO `message` (content, from_user_id, to_user_id, is_checked)  VALUES ("메세지 내용2", 2, 1, true);
INSERT INTO `message` (content, from_user_id, to_user_id, is_checked)  VALUES ("메세지 내용3", 1, 2, true);
INSERT INTO `message` (content, from_user_id, to_user_id)  VALUES ("메세지 내용1", 2, 3);
INSERT INTO `message` (content, from_user_id, to_user_id, is_checked)  VALUES ("메세지 내용2", 3, 2, true);
INSERT INTO `message` (content, from_user_id, to_user_id, is_checked)  VALUES ("메세지 내용3", 1, 4, true);
INSERT INTO `message` (content, from_user_id, to_user_id)  VALUES ("메세지 내용1", 2, 4);
INSERT INTO `message` (content, from_user_id, to_user_id, is_checked)  VALUES ("메세지 내용2", 1, 3, true);
INSERT INTO `message` (content, from_user_id, to_user_id, is_checked)  VALUES ("메세지 내용3", 4, 3, true);



CREATE TABLE IF NOT EXISTS `user_like_course` (
	`course_id`					int				NOT NULL,
	`user_id`					int				NOT NULL
);

ALTER TABLE `user_like_course` ADD CONSTRAINT `PK_USER_LIKE_COURSE` PRIMARY KEY (
	`course_id`,
	`user_id`
);

INSERT INTO `user_like_course` (course_id, user_id)  VALUES (1, 1);
INSERT INTO `user_like_course` (course_id, user_id)  VALUES (3, 1);
INSERT INTO `user_like_course` (course_id, user_id)  VALUES (5, 1);
INSERT INTO `user_like_course` (course_id, user_id)  VALUES (1, 3);
INSERT INTO `user_like_course` (course_id, user_id)  VALUES (3, 3);
INSERT INTO `user_like_course` (course_id, user_id)  VALUES (1, 4);
INSERT INTO `user_like_course` (course_id, user_id)  VALUES (1, 2);
INSERT INTO `user_like_course` (course_id, user_id)  VALUES (3, 2);
INSERT INTO `user_like_course` (course_id, user_id)  VALUES (2, 2);



CREATE TABLE IF NOT EXISTS `follow` (
	`follow_id`					int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`from_user_id`				int				NOT NULL,
	`to_user_id`				int				NOT NULL
);

INSERT INTO `follow` (from_user_id, to_user_id)  VALUES (1, 2);
INSERT INTO `follow` (from_user_id, to_user_id)  VALUES (1, 3);
INSERT INTO `follow` (from_user_id, to_user_id)  VALUES (2, 3);
INSERT INTO `follow` (from_user_id, to_user_id)  VALUES (3, 1);



CREATE TABLE IF NOT EXISTS `channel` (
	`channel_id`				int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name`						varchar(50)		NOT NULL,
	`platform_id`				int				NOT NULL
);

INSERT INTO `channel` (name, platform_id)  VALUES ("스프링 채널1", 1);
INSERT INTO `channel` (name, platform_id)  VALUES ("스프링 채널2", 1);
INSERT INTO `channel` (name, platform_id)  VALUES ("리액트 채널1", 1);
INSERT INTO `channel` (name, platform_id)  VALUES ("리액트 채널2", 1);
INSERT INTO `channel` (name, platform_id)  VALUES ("뷰 채널1", 1);
INSERT INTO `channel` (name, platform_id)  VALUES ("뷰 채널2", 1);
INSERT INTO `channel` (name, platform_id)  VALUES ("장고 채널1", 1);
INSERT INTO `channel` (name, platform_id)  VALUES ("장고 채널1", 1);



CREATE TABLE IF NOT EXISTS `platform` (
	`platform_id`				int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name`						varchar(20)		NULL
);

INSERT INTO `platform` (name)  VALUES ("유튜브");



CREATE TABLE IF NOT EXISTS `study_request` (
	`study_request_id`			int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`content`					varchar(255)	NULL,
	`request_time`				timestamp		NOT NULL DEFAULT now(),
	`status`					tinyint			NOT NULL DEFAULT 0,
	`user_id`					int				NOT NULL,
	`study_id`					int				NOT NULL
);

INSERT INTO `study_request` (content, user_id, study_id, `status`)  VALUES ("신청 메세지1", 2, 1, 1);
INSERT INTO `study_request` (content, user_id, study_id, `status`)  VALUES ("신청 메세지2", 3, 1, 1);
INSERT INTO `study_request` (content, user_id, study_id, `status`)  VALUES ("신청 메세지3", 4, 1, 1);
INSERT INTO `study_request` (content, user_id, study_id, `status`)  VALUES ("신청 메세지1", 2, 5, 2);
INSERT INTO `study_request` (content, user_id, study_id, `status`)  VALUES ("신청 메세지2", 3, 5, 2);
INSERT INTO `study_request` (content, user_id, study_id, `status`)  VALUES ("신청 메세지3", 4, 5, 2);
INSERT INTO `study_request` (content, user_id, study_id)  VALUES ("신청 메세지1", 4, 6);
INSERT INTO `study_request` (content, user_id, study_id)  VALUES ("신청 메세지2", 2, 6);
INSERT INTO `study_request` (content, user_id, study_id)  VALUES ("신청 메세지3", 3, 5);



CREATE TABLE IF NOT EXISTS `study_community` (
	`study_community_id`		int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`content`					text			NOT NULL,
	`publish_time`				timestamp		NOT NULL DEFAULT now(),
	`is_deleted`				boolean			NOT NULL DEFAULT false,
	`user_id`					int				NOT NULL,
	`study_id`					int				NOT NULL
);

INSERT INTO `study_community` (content, user_id, study_id)  VALUES ("스터디 글1", 1, 1);
INSERT INTO `study_community` (content, user_id, study_id)  VALUES ("스터디 글2", 2, 2);
INSERT INTO `study_community` (content, user_id, study_id)  VALUES ("스터디 글3", 3, 3);
INSERT INTO `study_community` (content, user_id, study_id)  VALUES ("스터디 글4", 4, 4);
INSERT INTO `study_community` (content, user_id, study_id)  VALUES ("스터디 글5", 1, 5);
INSERT INTO `study_community` (content, user_id, study_id)  VALUES ("스터디 글6", 1, 6);
INSERT INTO `study_community` (content, user_id, study_id, is_deleted)  VALUES ("스터디 글7", 2, 1, true);
INSERT INTO `study_community` (content, user_id, study_id)  VALUES ("스터디 글8", 3, 1);
INSERT INTO `study_community` (content, user_id, study_id)  VALUES ("스터디 글9", 4, 1);



CREATE TABLE IF NOT EXISTS `note` (
	`user_id`					int				NOT NULL,
	`lecture_id`				int				NOT NULL,
	`content`					text			NULL,
	`last_modified_date`		timestamp		NOT NULL DEFAULT now(),
	`is_deleted`				boolean			NOT NULL DEFAULT false
);

ALTER TABLE `note` ADD CONSTRAINT `PK_NOTE` PRIMARY KEY (
	`user_id`,
	`lecture_id`
);

INSERT INTO `note` (user_id, lecture_id, content)  VALUES (1, 1, "1번 필기");
INSERT INTO `note` (user_id, lecture_id, content)  VALUES (1, 2, "2번 필기");
INSERT INTO `note` (user_id, lecture_id, content)  VALUES (1, 3, "3번 필기");
INSERT INTO `note` (user_id, lecture_id, content, is_deleted)  VALUES (1, 4, "4번 필기", true);
INSERT INTO `note` (user_id, lecture_id, content)  VALUES (2, 4, "4번 필기");
INSERT INTO `note` (user_id, lecture_id, content)  VALUES (2, 2, "2번 필기");
INSERT INTO `note` (user_id, lecture_id, content)  VALUES (2, 3, "3번 필기");
INSERT INTO `note` (user_id, lecture_id, content, is_deleted)  VALUES (2, 1, "1번 필기", true);



CREATE TABLE IF NOT EXISTS `free_board` (
	`free_board_id`				int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title`						varchar(20)		NOT NULL,
	`content`					text			NOT NULL,
	`publish_time`				timestamp		NOT NULL DEFAULT now(),
	`is_deleted`				boolean			NOT NULL DEFAULT false,
	`hit`						int				NOT NULL DEFAULT 0,
	`user_id`					int				NOT NULL
);

INSERT INTO `free_board` (title, content, user_id)  VALUES ("자유 게시판 제목1", "내용1", 1);
INSERT INTO `free_board` (title, content, user_id)  VALUES ("자유 게시판 제목2", "내용2", 2);
INSERT INTO `free_board` (title, content, user_id)  VALUES ("자유 게시판 제목3", "내용3", 3);
INSERT INTO `free_board` (title, content, user_id)  VALUES ("자유 게시판 제목4", "내용4", 4);
INSERT INTO `free_board` (title, content, user_id, is_deleted)  VALUES ("자유 게시판 제목5", "내용5", 1, true);



CREATE TABLE IF NOT EXISTS `free_board_comment` (
	`free_board_comment_id`		int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`content`					text			NULL,
	`publish_time`				timestamp		NOT NULL DEFAULT now(),
	`is_deleted`				boolean			NOT NULL DEFAULT false,
	`parent_comment_id`			int				NULL,
	`free_board_id`				int				NOT NULL
);

INSERT INTO `free_board_comment` (content, free_board_id)  VALUES ("댓글1", 1);
INSERT INTO `free_board_comment` (content, free_board_id, parent_comment_id)  VALUES ("댓글2", 1, 1);
INSERT INTO `free_board_comment` (content, free_board_id, is_deleted)  VALUES ("댓글3", 1, true);
INSERT INTO `free_board_comment` (content, free_board_id, parent_comment_id)  VALUES ("댓글4", 1, 1);
INSERT INTO `free_board_comment` (content, free_board_id)  VALUES ("댓글1", 2);
INSERT INTO `free_board_comment` (content, free_board_id, parent_comment_id)  VALUES ("댓글2", 2, 5);
INSERT INTO `free_board_comment` (content, free_board_id, is_deleted)  VALUES ("댓글3", 2, true);
INSERT INTO `free_board_comment` (content, free_board_id, parent_comment_id)  VALUES ("댓글4", 2, 7);



CREATE TABLE IF NOT EXISTS `question_board` (
	`question_board_id`			int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title`						varchar(20)		NOT NULL,
	`content`					text			NOT NULL,
	`question_time`				int				NOT NULL,
	`is_deleted`				boolean			NOT NULL DEFAULT false,
	`hit`						int				NOT NULL DEFAULT 0,
	`is_public`					boolean			NOT NULL DEFAULT true,
	`publish_time`				timestamp		NOT NULL DEFAULT now(),
	`course_id`					int				NOT NULL,
	`user_id`					int				NOT NULL,
	`study_id`					int				NOT NULL
);

INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*2+15, true, 1, 1, 1);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*12+15, false, 1, 2, 1);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*5+15, true, 1, 3, 1);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id, is_deleted)  VALUES ("질문1", "질문 내용1", 60*9+15, false, 1, 4, 1, true);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*3+15, true, 1, 1, 1);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*4+15, false, 1, 1, 5);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id, is_deleted)  VALUES ("질문1", "질문 내용1", 60*2+15, true, 1, 1, 5, true);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id, is_deleted)  VALUES ("질문1", "질문 내용1", 60*2+15, true, 2, 1, 1, true);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id, is_deleted)  VALUES ("질문1", "질문 내용1", 60*12+15, false, 2, 2, 1, true);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*5+15, true, 2, 3, 1);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*9+15, false, 2, 4, 1);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*3+15, true, 2, 1, 1);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*4+15, false, 2, 1, 5);
INSERT INTO `question_board` (title, content, question_time, is_public, course_id, user_id, study_id)  VALUES ("질문1", "질문 내용1", 60*2+15, true, 2, 1, 5);



CREATE TABLE IF NOT EXISTS `question_board_comment` (
	`question_board_comment_id`	int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`content`					text			NOT NULL,
	`publish_time`				timestamp		NOT NULL DEFAULT now(),
	`is_deleted`				boolean			NOT NULL DEFAULT false,
	`parent_comment_id`			int				NULL,
	`question_board_id`			int				NOT NULL
);

INSERT INTO `question_board_comment` (content, question_board_id)  VALUES ("댓글1", 1);
INSERT INTO `question_board_comment` (content, question_board_id, parent_comment_id)  VALUES ("댓글2", 1, 1);
INSERT INTO `question_board_comment` (content, question_board_id, is_deleted)  VALUES ("댓글3", 1, true);
INSERT INTO `question_board_comment` (content, question_board_id, parent_comment_id)  VALUES ("댓글4", 1, 1);
INSERT INTO `question_board_comment` (content, question_board_id)  VALUES ("댓글1", 2);
INSERT INTO `question_board_comment` (content, question_board_id, parent_comment_id)  VALUES ("댓글2", 2, 5);
INSERT INTO `question_board_comment` (content, question_board_id, is_deleted)  VALUES ("댓글3", 2, true);
INSERT INTO `question_board_comment` (content, question_board_id, parent_comment_id)  VALUES ("댓글4", 2, 7);



CREATE TABLE IF NOT EXISTS `alarm` (
	`alarm_id`					int				NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`user_id`					int				NOT NULL,
	`is_checked`				boolean			NOT NULL DEFAULT false,
	`content`					varchar(50)		NOT NULL,
	`url`						varchar(255)	NOT NULL
);

INSERT INTO `alarm` (user_id, content, url)  VALUES ("1", "알람1", "url1");
INSERT INTO `alarm` (user_id, content, url)  VALUES ("1", "알람2", "url2");
INSERT INTO `alarm` (user_id, content, url)  VALUES ("2", "알람1", "url1");
INSERT INTO `alarm` (user_id, content, url)  VALUES ("3", "알람1", "url1");
INSERT INTO `alarm` (user_id, content, url, is_checked)  VALUES ("1", "알람1", "url1", true);
INSERT INTO `alarm` (user_id, content, url, is_checked)  VALUES ("1", "알람2", "url2", true);
INSERT INTO `alarm` (user_id, content, url, is_checked)  VALUES ("2", "알람1", "url1", true);
INSERT INTO `alarm` (user_id, content, url, is_checked)  VALUES ("3", "알람1", "url1", true);



CREATE TABLE IF NOT EXISTS `user_like_category` (
	`user_id`					int				NOT NULL,
	`course_category_id`		int				NOT NULL
);

ALTER TABLE `user_like_category` ADD CONSTRAINT `PK_USER_LIKE_CATEGORY` PRIMARY KEY (
	`user_id`,
	`course_category_id`
);

INSERT INTO `user_like_category` (user_id, course_category_id)  VALUES (1, 1);
INSERT INTO `user_like_category` (user_id, course_category_id)  VALUES (1, 2);
INSERT INTO `user_like_category` (user_id, course_category_id)  VALUES (1, 3);
INSERT INTO `user_like_category` (user_id, course_category_id)  VALUES (2, 4);
INSERT INTO `user_like_category` (user_id, course_category_id)  VALUES (2, 5);
INSERT INTO `user_like_category` (user_id, course_category_id)  VALUES (3, 2);

