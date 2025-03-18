# Use Node.js as the base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
