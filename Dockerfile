FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Use EB port at runtime
EXPOSE 8080

CMD ["node", "server.js"]
