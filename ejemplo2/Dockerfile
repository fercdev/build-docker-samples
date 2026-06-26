FROM node:22-alpine

ARG VERSION=1.0.0

ENV APP_NAME="Docker Build APP"
ENV VERSION=${VERSION}
ENV PORT=3000

WORKDIR /app

COPY package.json .

RUN npm install

COPY app.js .

EXPOSE ${PORT}

CMD ["npm", "start"]