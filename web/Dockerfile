# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Working directory in the container
WORKDIR /app

# Copying package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copying the rest of the application code
COPY . .

# Open port 5173 for the dev server
EXPOSE 5173

# Run the application
CMD ["npm", "run", "dev", "--", "--host"]