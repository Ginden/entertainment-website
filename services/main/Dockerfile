FROM node:16
RUN mkdir -p /app
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci
COPY . /app
RUN npm run build

CMD ["node", "."]
