module.exports = {
    
    //setting the basic info of this command
    //name
    name: 'checkbirthday',
    //description
    description: "This is a command that allows a user to check somebody's birthday",
    ///This is the code that gets exeecuted when the command is run
    execute(message,args,con) {
        
        
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

        //creating a substring that takes just the parameters as a single string
        var args2 = message.content.substring(i+1)

        //creating a string array that holds all the arguments of the command
        var args3 = args2.split(" ")

        }

        //printing all the parameters of the command for testing purposes
        console.log(args3[0])
        console.log(args3.length)



        //checking if the user has the correct role to be allowed to use this command
        if(message.member.roles.cache.some(role => role.name === 'Member')) {
          
          //deleting the command so the channel is cleaner
          message.delete()

        //checking if the required number of arguments has been met
        if (args3.length == 1) {

         //making a small shortcut if the person inputting the command wants their birthday to be addded
         if (args3[0] == "me") {
          //getting the date
          con.query("SELECT date FROM birthday WHERE userid = ?", [user], function (err, result, fields) {
            if (err) {message.channel.send('There was an error getting the birthday.')
          } else {
            message.channel.send(result[0].date)
          }
          });

         //if the user does not want themselves
         } else {

           //making a try catch just in case fetching the user's info goes wrong
          try {

            //getting the user name from the first argument
            targetuser = message.guild.members.get(args3[0]).id
            //getting the id from the first argument
            targetusername = message.guild.members.get(args3[0]).displayName


          } catch (error) {
            message.channel.send("There was an error getting the information of the requested user")
          }

          //getting the date
          con.query("SELECT date FROM birthday WHERE userid = ?", [user], function (err, result, fields) {
            if (err) {message.channel.send('There was an error getting the birthday.')
          } else {
            message.channel.send(result[0].date)
          }
          });
         }

        } else {
          //giving an error message to the user
          message.channel.send('This is not a valid command.')
          message.channel.send('There must be one parameter.')
          message.channel.send('To learn how to use the assistant bot, do -help.')

        }

      } else {
        //deleting the command so the channel is cleaner and sending an error message
        message.delete()
        message.channel.send('This discord user is not allowed to check a birthday')
      }
        

    }

}