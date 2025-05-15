FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm i -g serve

EXPOSE 5001

CMD ["serve", "-s", "dist", "-p", "5001"]
