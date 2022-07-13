FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV MYSQL_HOST "mysql"
ENV MYSQL_PORT "3306"
ENV MYSQL_USER "root"
ENV MYSQL_PASSWORD "2002"
ENV MYSQL_DATABASE "foreigners"

EXPOSE 9000

CMD [ "node", "index.js"]