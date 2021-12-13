# getting the latest node
FROM node:latest

# Setting the timezone
ENV TZ=America/New_York

# Creating the directory
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# copy/installing bot
COPY package.json /usr/src/bot
RUN npm install

# This is the bot
COPY . /usr/src/bot

# starting commands that are entered into the command line by the program
CMD ["node", "index.js"]