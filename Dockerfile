FROM node:lts-alpine
 
WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

# CMD ["node", "--watch", "server.js"]
