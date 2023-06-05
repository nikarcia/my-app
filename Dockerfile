# Etapa de compilación
FROM node:16.0.0 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:1.21.0-alpine
COPY --from=build /app/dist/my-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
