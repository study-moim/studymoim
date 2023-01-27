# Jenkins 컨테이너 실행

## Jenkins 이미지 빌드
```
> sudo docker build -t jenkins/jenkins:custom .
> sudo docker run -d -it -u root -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -p 9090:8080 -p 50000:50000 --name jenkins_container jenkins/jenkins:custom /bin/bash
```

## Jenkins 이미지 실핼
```
> sudo docker exec jenkins_container java -jar /usr/share/jenkins/jenkins.war
```
port: 9090

