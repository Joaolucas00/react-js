FROM ubuntu:latest AS reactapp
WORKDIR /home/reactapp-organo
COPY . .
RUN apt update && apt install nodejs -y && apt install npm -y
RUN npm install --production && npm run build

FROM nginx:latest
EXPOSE 80
WORKDIR /usr/share/nginx/html/
RUN service nginx start && rm -rf /usr/share/nginx/html/*
COPY --from=reactapp /home/reactapp-organo/build/* /usr/share/nginx/html/
RUN mkdir static imagens && mv js css ./static && mv *.png ./imagens && mv ./imagens/logo192.png .
CMD  ["nginx", "-g", "daemon off;"]