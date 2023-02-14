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
COPY nginx/sites-available/myapp.conf /etc/nginx/sites-available/myapp.conf