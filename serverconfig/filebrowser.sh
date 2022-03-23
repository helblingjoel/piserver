#!/bin/bash
docker run -d --name filebrowser -p 5000:8080 --user $(id -u):$(id -g) -v /home/joel/filebrowser/files:/data -v /home/joel/filebrowser/branding:/config/branding -e FB_BASEURL="/files" --restart unless-stopped hurlenko/filebrowser