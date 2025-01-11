# Use Node.js version 20 as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the port that your app runs on
EXPOSE 4200

# Define the command to run your app using ng serve
CMD ["ng", "serve", "--host", "0.0.0.0"]
