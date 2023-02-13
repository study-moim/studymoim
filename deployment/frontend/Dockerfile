FROM ubuntu:22.04

MAINTAINER malachai<prussian1933@naver.com>
USER root
WORKDIR /home

# Nginx installation
RUN \
    apt update -y && \
    apt install wget vim -y && \
    apt install nginx -y && \
    rm /etc/nginx/sites-available/default && \
    rm /etc/nginx/sites-enabled/default && \
    touch /etc/nginx/sites-available/myapp.conf && \
    ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf && \
    apt install curl && \
    curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh && \
    echo "y" | bash nodesource_setup.sh && \
    apt install -y nodejs && \
    apt install -y build-essential
COPY nginx/sites-available/myapp.conf /etc/nginx/sites-available/myapp.conf