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
1. Git clone the repo
2. Create a discord bot using the discord developer portal
3. Set up a .env file with the following:
* DISCORD_TOKEN (set it to the token of the bot you just created)
* PREFIX (the prefix you want the discord bot to have)
* LINK (the link you want the bot to post)
* ROLE (the role id of the news role)
4. Build the image in the directory with ``docker build -t assistantbot .``
5. Run the image
6. Enjoy!


