//importing modules
const Discord = require('discord.js');
var mysql = require('mysql2');
const env = require('dotenv').config()
const schedule = require('node-schedule');
const fs = require('fs');



//Creating discord client
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
});

//getting id
client.channels.cache.get('id')

//getting prefix from the environmental variables
const prefix = process.env.PREFIX;



//This stores information relating to the connection to the database
var con = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: process.env.MYSQL_LOCAL_PORT,
    database: process.env.MYSQL_DATABASE,
    dateStrings: true
});

//creating a collector for disscord commands
client.commands = new Discord.Collection();

//creating a command initialiser
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)

}

//ready event for the discord bot
client.once('ready', () => {
    console.log("Bot is online");

});

//This is the cron function that checks birthdays everyday
const job = schedule.scheduleJob('54 20 * * *', function() {
    console.log("Time functuion called")
    check()
})

//This is the function that checks for somebody's birthday
function check() {

    //making a query to get birthdays in 14 days
    con.query("SELECT * FROM birthday WHERE DATE_FORMAT(date, '%m-%d') = DATE_FORMAT(DATE_ADD(CURRENT_DATE, INTERVAL 14 DAY), '%m-%d');", function(err, result, fields) {
        console.log("date query called")
        if (err) {
            console.log(err)
        } else {
            console.log(result)

            //making a for loop to run through every entry in the results
            for (i = 0; i < result.length; i++) {


                try {

                    channel = result[i].channelid
                    client.channels.cache.get(channel).send('@everyone It will be the bithday of <@' + result[i].userid + '> in 14 days');

                } catch (error) {
                    console.log(error)
                }


            }

        }
    });

    //making a query to get birthdays in 7 days
    con.query("SELECT * FROM birthday WHERE DATE_FORMAT(date, '%m-%d') = DATE_FORMAT(DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY), '%m-%d');", function(err, result, fields) {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            //making a for loop to run through every entry in the results
            for (i = 0; i < result.length; i++) {


                try {

                    channel = result[i].channelid
                    client.channels.cache.get(channel).send('@everyone It will be the bithday of <@' + result[i].userid + '> in 7 days');

                } catch (error) {
                    console.log(error)
                }


            }
        }
    });

    //making a query to get birthdays today
    con.query("SELECT * FROM birthday WHERE DATE_FORMAT(date, '%m-%d') = DATE_FORMAT(CURRENT_DATE, '%m-%d');", function(err, result, fields) {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            //making a for loop to run through every entry in the results
            for (i = 0; i < result.length; i++) {


                try {

                    channel = result[i].channelid
                    client.channels.cache.get(channel).send('@everyone Today is the bithday of <@' + result[i].userid + '>!');

                } catch (error) {
                    console.log(error)
                }


            }
        }
    });


}

//message event
client.on('message', message => {


    if (message.channel.id == '825821287192199288') {


    }

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'help' || command == 'h') {
        client.commands.get('help').execute(message, args);
    } else if (command == 'web') {
        client.commands.get('link').execute(message, args);
    } else if (command == 'map') {
        client.commands.get('map').execute(message, args);
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
    }
});

//Gets token from env variables

client.login(process.env.DISCORD_TOKEN);