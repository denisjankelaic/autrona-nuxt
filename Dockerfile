# syntax=docker/dockerfile:1.2
FROM node:22.0-alpine as base

WORKDIR /usr/src/app

RUN apk add --no-cache python3 py3-pip make g++

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["yarn", "start"]

FROM base as vendor

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

FROM vendor as build

ARG CACHEBUST=1

COPY . ./

RUN --mount=type=secret,id=.env,uid=1000,gid=1000,dst=/usr/src/app/.env yarn build

FROM base as production
COPY --from=build --chown=node:node /usr/src/app /usr/src/app
RUN apk add --no-cache nano