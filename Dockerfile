FROM node:9.4

# Create app directory
WORKDIR /olive-brokerage-frontend

# Expose port for service
EXPOSE 5000

# Install and configure `serve`.
RUN npm install -g serve

# Copy source code to image
COPY . .

# Install dependencies
RUN npm install

# Build app and start server from script
CMD ["npm", "run", "build"]
CMD ["serve", "-s", "build"]