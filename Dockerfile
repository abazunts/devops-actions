FROM node:20-alpine
ARG PORT
ENV PORT=$PORT
WORKDIR /app
COPY package.json ./
RUN npm install
COPY app.js ./
EXPOSE ${PORT}
CMD ["node", "app.js"]
