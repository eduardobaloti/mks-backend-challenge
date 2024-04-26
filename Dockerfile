FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm build

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

