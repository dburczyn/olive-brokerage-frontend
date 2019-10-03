FROM mhart/alpine-node:11 AS builder
WORKDIR /digifof-brokerage-frontend
COPY . .
RUN npm install
RUN npm install -g serve
EXPOSE 3000
CMD ["npm", "start"]
