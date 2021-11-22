const Discord = require('discord.js');
var mysql = require('mysql2');  
const env = require('dotenv').config()
client.channels.cache.get('id')



const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = process.env.PREFIX;

const fs = require('fs');

//This stores information relating to the connection to the database
var con = mysql.createPool({  
    host: process.env.MYSQL_HOST,  
    user: process.env.MYSQL_USERNAME,  
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: process.env.MYSQL_LOCAL_PORT,
    database: process.env.MYSQL_DATABASE
  });  

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,command)
    
}


client.once('ready',  () => {
    console.log("Bot is online");

});

//This is the cron function that checks birthdays everyday
const job = schedule.scheduleJob('05 13 * * *', function(){
  console.log("Time functuion called")
  check()
})

//This is the function that checks for somebody's birthday
function check() {

  //making a query to get birthdays in 14 days


  //making a query to get birthdays in 7 days

  //making a query to get birthdays today

  
}

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
    }else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'baa') {
      client.commands.get('baa').execute(message, args, Discord, client);
    } else if (command === 'account') {
      client.commands.get('account').execute(message, args, con, Discord, client);
    } else if (command === 'badd') {
      client.commands.get('newbirthday').execute(message, args, con, Discord, client);
    } else if (command === 'brm') {
      client.commands.get('removebirthday').execute(message, args, con, Discord, client);
    } else if (command === 'bday') {
      client.commands.get('checkbirthday').execute(message, args, con, Discord, client);
    } else if (command === 'setstatus') {
      client.commands.get('setstatus').execute(message, args, Discord, client);
    }
});

//Gets token from env variables


client.login(process.env.DISCORD_TOKEN);

