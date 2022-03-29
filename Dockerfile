FROM node:16 AS ui-build

WORKDIR /usr/something-fishy/client
COPY /client ./
RUN npm install
RUN npm run build

FROM node:16 AS server-build

WORKDIR /usr/something-fishy

COPY --from=ui-build /usr/something-fishy/client/build/ ./client/build
WORKDIR /usr/something-fishy/server/

COPY /server/package*.json ./
RUN npm install

COPY /server/db.js ./
COPY /server/index.js ./

EXPOSE 8080

CMD [ "node", "index.js" ]
