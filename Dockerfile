FROM node:16.13.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

Expose 3000
CMD ["node","app.js"]