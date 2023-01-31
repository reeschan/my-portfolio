FROM node:16 AS builder
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm ci

FROM node:16-stretch-slim AS runner
ENV NODE_ENV=production
CMD ["npm","run","dev"]