const Discord = require('discord.js');
var mysql = require('mysql2');  
const env = require('dotenv').config()
var lastmsg;
var lm;



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
    } else if (command === 'account') {
        var i = message.content.indexOf(" ");
        var username = message.author.toString();
        const memberRole = message.guild.roles.cache.find(role => role.name === "Member");
        var user = message.author.id;
        console.log(i)
        if (i == undefined || i == -1 || i == null) {
          message.channel.send('This is not a valid command.');
          message.channel.send('To learn how to use the poll bot, do !help.')
          return;
        } else {
        var args2 = message.content.substring(i+1);
        var args3 = args2.split(";");

        }

        console.log(args3[0])
        console.log(args3[1])
        console.log(args3.length)




        if(message.member.roles.has(memberRole)) {

          message.delete(); 

        if (args3.length == 2) {

          
            
          con.query("INSERT INTO credentials VALUES(? , ? , ?);", [user,args3[0],args3[1]], function (err, result) {
            if (err) {message.channel.send('There was an error creating your account.')
          } else {
            message.channel.send(user + ',your account was created successfully!')
          }
            
        }) 

        } else {
          message.channel.send('This is not a valid command.');
          message.channel.send('There must be two parameters given, split using semicolons.');
          message.channel.send('To learn how to use the assistant bot, do -help.')

        }

      } else {
        message.delete(); 
        message.channel.send('This discord user is not viable to receive an account');
      }
    } 

});

//Gets token from env variables


client.login(process.env.DISCORD_TOKEN);

