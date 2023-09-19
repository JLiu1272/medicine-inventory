# Build Stage 
FROM node:alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install -frozen-lockfile

COPY . .

RUN npm run build

ENV NODE_ENV=production

# Runtime stage 
FROM node:alpine

ENV NODE_ENV=production

WORKDIR /app

RUN chown node:node .
USER node

COPY package*.json .
COPY ./.next ./.next/ 
COPY ./public ./public/
COPY ./node_modules ./node_modules/ 
EXPOSE 3000

CMD ["npm", "start"]
