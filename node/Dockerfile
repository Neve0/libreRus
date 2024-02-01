FROM node:10.0.0-slim

WORKDIR /server

COPY ./node .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]