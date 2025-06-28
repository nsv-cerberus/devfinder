# Use Node.js 20 Alpine
FROM node:20-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Default command (can be overridden in docker-compose)
CMD ["npm", "run", "start:dev"]
