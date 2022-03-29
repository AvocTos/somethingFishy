FROM node:16 AS ui-build

WORKDIR /

COPY package.json ./

RUN npm install

COPY ./client ./client

RUN npm run npm-i-client

EXPOSE 8080

CMD [ "npm", "run dev" ]
