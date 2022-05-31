FROM node:17-alpine3.14
ARG REACT_APP_URLBACK=localhost
WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm","start"]