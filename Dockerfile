# syntax=docker/dockerfile:1
FROM node:16-alpine AS builder
WORKDIR /usr/app
COPY frontend/yarn.lock .
COPY frontend/package.json .
RUN yarn install
COPY frontend .
RUN yarn run build


FROM node:16-alpine as ts-environment
WORKDIR /usr/app

COPY package.json ./

COPY yarn.lock ./
COPY tsconfig*.json ./

RUN yarn install

COPY . ./
RUN yarn run build
RUN rm -Rf /usr/app/frontend
COPY --from=builder /usr/app/build ./dist/src/build

ENV NODE_ENV=production
ENV PORT 9000

EXPOSE $PORT

CMD ["node", "dist/src/index.js"]