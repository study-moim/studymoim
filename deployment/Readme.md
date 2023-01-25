
# 1. 기본 머신 설정

## Git 설치
```
> sudo apt install git
```

## Docker 설치
```
> sudo apt update
> sudo apt-get install -y ca-certificates curl software-properties-common apt-transport-https gnupg lsb-release

> sudo mkdir -p /etc/apt/keyrings
> curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
> echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

> sudo apt update
> sudo apt install docker-ce docker-ce-cli containerd.io
```

## 이미지 pull
```
> sudo docker pull jenkins/jenkins:lts-jdk11
> sudo docker pull ubuntu:22.04
```

## 
```
> bash mvnw compile
> bash mvnw package
```