# Backend 자동배포 구축

## 1. WAS 아카이브 빌드
```
> cd development/Backend/studymoim
> bash ./mvnw compile
> bash ./mvnw package
```

## 2. 빌드 된 아카이브 전달
```
> docker cp target/peace-0.0.1-SNAPSHOT.jar spring-dev:/home
```

## 3. 스프링 서버 실행
```
> docker exec -d spring-dev sh -c "java -jar /home/peace-0.0.1-SNAPSHOT.jar -Dspring.profiles.active=test >> /home/server.log"
```