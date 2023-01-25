# Backend 자동배포 구축

## WAS 아카이브 빌드 및 컨테이너 실행
```
> cd development/Backend/studymoim
> bash ./mvnw compile
> bash ./mvnw package

> target/peace-0.0.1-SNAPSHOT.jar

> docker stop spring_container
> docker rm spring_container
> docker build -t ubuntu/backend:develop development/Backend/studymoim
> docker run -d -it -p 8000:8080 --name spring_container ubuntu/backend:develop /bin/bash

> docker cp target/peace-0.0.1-SNAPSHOT.jar spring_container:/home
> docker exec -d sh -c "java -jar /home/peace-0.0.1-SNAPSHOT.jar -Dspring.profiles.active=test >> /home/server.log"
```