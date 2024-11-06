FROM --platform=linux/amd64 node:lts-alpine

WORKDIR /app

COPY package.json package lock.json ./

RUN npm ci

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]