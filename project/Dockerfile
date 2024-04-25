FROM node:16.13.1-alpine as builder
RUN apk --no-cache --update --virtual build-dependencies add python3

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install && npm install -g serve 
COPY . .
RUN npm run build

CMD ["serve", "-s", "build"]
