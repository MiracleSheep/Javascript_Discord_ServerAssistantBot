# Javascript_Discord_ServerAssistantBot

## Description

This bot is meant to add a few helpful features to my discord server.
Features include:
* A help command which prints an embed explaining the commands
* A ping command
* A news command which adds/removes users from a group which gets pinged when there is news of the minecraft server
* A web command which posts the link to a website.

## How to set up

### Requrements
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
* ROLE (the role id of the news role, which you can get by right clicking and role and choosing copy role id on discord)
5. Build the image in the directory with ``docker build -t assistantbot .``
6. Run the image ``docker run -d --name [insert name here] assistantbot``
7. Enjoy!


