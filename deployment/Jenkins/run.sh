#!/bin/bash

set -e

sudo docker build -t jenkins/jenkins:custom .
sudo docker run -d -it -u root -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -p 9090:8080 -p 50000:50000 --name jenkins_container jenkins/jenkins:custom /bin/bash