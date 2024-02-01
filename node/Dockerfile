FROM node:10.0.0-slim

WORKDIR /server

COPY ./node .

#RUN npm config set https-proxy http://10.70.124.16:3128

#RUN npm config set proxy http://10.70.124.16:3128

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]