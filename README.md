# Javascript_Discord_ServerAssistantBot

## Description

This bot is meant to add a few helpful features to my discord server.
Features include:
* A help command which prints an embed explaining the commands
* A ping command
* A web command which posts the link to a website.
* An entire birthday system which allows birthdays to be set up and removed.

## How to set up

### Requirements
* Docker
* That is pretty much it

### Instructions
1. Git clone the repo ``git clone https://github.com/MiracleSheep/Javascript_Discord_ServerAssistantBot.git``
2. Create a discord application using the discord developer portal https://discord.com/developers/docs/
3. Create a bot in the application, customize it to your liking, and grab the bot token
4. Set up a .env file inside of the container with the following variables:
* DISCORD_TOKEN (set it to the token of the bot you just created)
* PREFIX (the prefix you want the discord bot to have)
* LINK (the link you want the bot to post)
5. Build the image in the directory with ``docker build -t assistantbot .``
6. Run the image ``docker run -d --name [insert name here] assistantbot``
7. Enjoy!

#### Note:
This is primarily meant to be used with the minecraft webserver.


