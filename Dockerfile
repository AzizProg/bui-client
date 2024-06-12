FROM node:20.14.0-alpine

WORKDIR /bui_client

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","run","dev"]
