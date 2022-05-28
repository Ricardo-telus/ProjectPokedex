FROM node:16.3.0-alpine

WORKDIR /usr/src/app

COPY . . 

COPY ./package.json .

RUN npm install

EXPOSE 8000

CMD ["node","app"]