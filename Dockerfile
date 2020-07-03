FROM node:10-alpine
WORKDIR  /app
COPY package.json ./app
RUN yarn
COPY . /app
CMD ["yarn","start"]
