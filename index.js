const Discord = require('discord.js');
const env = require('dotenv').config()
var lastmsg;
var lm;



const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = process.env.PREFIX;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,command)
    
}


client.once('ready',  () => {
    console.log("Bot is online");

});

client.on('message',message => {
 

    if (message.channel.id == '825821287192199288') {

        
    }

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'help' || command == 'h') {
        client.commands.get('help').execute(message,args);
    } else if (command == 'web') {
        client.commands.get('link').execute(message,args);
    } else if (command == 'news') {
        client.commands.get('news').execute(message,args);
    }else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 

});

//Gets token from env variables


client.login(process.env.DISCORD_TOKEN);

