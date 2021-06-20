FROM node:alpine

WORKDIR /usr/app/

COPY package*.json ./

COPY ./src/ .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
