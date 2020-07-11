FROM node:7.7.2-alpine
WORKDIR /usr/angle
COPY package.json .
RUN npm install --quiet
COPY . .