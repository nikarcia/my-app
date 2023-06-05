FROM node:16.0.0-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app
CMD ["npm", "start"]
