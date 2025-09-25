FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Use EB port (will be passed at runtime)
EXPOSE 8080

# Start server
CMD ["node", "server.js"]
