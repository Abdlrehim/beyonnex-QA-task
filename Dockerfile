# Use the official Cypress Docker image as the base image
FROM cypress/included:8.2.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory in the container
COPY . .

# Set the entry point for the Docker container
CMD ["npm", "test"]
