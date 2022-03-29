FROM node:16 AS ui-build

WORKDIR /usr/somethingFishy/client
COPY /client ./

RUN npm install
RUN npm run build

FROM node:16 AS server-build

WORKDIR /usr/somethingFishy

COPY --from=ui-build /usr/somethingFishy/client/build/ ./client/build
WORKDIR /usr/somethingFishy/

COPY /package*.json ./server
RUN npm install

COPY /index.js ./server

EXPOSE 8080

CMD [ "node", "index.js" ]

