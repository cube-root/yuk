FROM node:buster-slim
# Install nginx
RUN apt update && apt install nginx -y
RUN service nginx start
# Frontend
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN mkdir config && cat ./conf/default.conf > ./config/nginx.conf
RUN npm run build && npm prune --production
EXPOSE 3000
CMD ["npm","start"]
