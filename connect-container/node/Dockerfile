FROM node:latest

ENV LISTEN_PORT 8081

COPY ./app.js /app.js

RUN npm init -f
RUN npm install --save redis

EXPOSE $LISTEN_PORT

CMD node app.js

