module.exports = {

    name: 'setstatus',
    description: "This is a command that changes the status of the discord bot",
    execute(message,args) {
        message.delete(); 

        //variable that holds the username of the person who sent the command
        var username = message.author.toString()

        //variable that holds the user id for the person who sent the message
        var user = message.author.id

        
        //Checking if there is a space after the command to see if there are any parameters
        if (message.content.indexOf(" ") == undefined || message.content.indexOf(" ") == -1 || message.content.indexOf(" ") == null) {
          
          //Telling the user that this is an invalid command
          message.channel.send('This is not a valid command.')
          message.channel.send('To learn how to use the poll bot, do !help.')
          return
        
        } else {


            //checking if the user has the correct role to be allowed to use this command
        if(message.member.roles.cache.some(role => role.name === 'Member')) {
          
            //deleting the command so the channel is cleaner
            message.delete()

            //making a try catch incase there is an error setting status
            try {

                //creating a substring that takes just the parameters as a single string
                var args2 = message.content.substring(i+1)

                //setting the status of the bot
                client.user.setActivity(args3[0],{ type: "WATCHING" }).catch(console.error)
            } catch (error) {
                message.channel.send('There was an errror setting the status of the assistant bot.')
            }


        } else {
            message.channel.send('You do not have the proper role to do this command')
        }


        }



    }

}