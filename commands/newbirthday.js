module.exports = {

  //setting the basic info of this command
  //name
  name: 'newbirthday',
  //description
  description: "This is a command that allows a user to add a birthday",
  ///This is the code that gets exeecuted when the command is run
  execute(message, args, con) {


      //variable that holds the username of the person who sent the command
      var username = message.author.username.toString()

      //variable that holds the user id for the person who sent the message
      var user = message.author.id

      //getting the location of the first space in the command
      var i = message.content.indexOf(" ");

      //Checking if there is a space after the command to see if there are any parameters
      if (message.content.indexOf(" ") == undefined || message.content.indexOf(" ") == -1 || message.content.indexOf(" ") == null) {

          //Telling the user that this is an invalid command
          message.channel.send('This is not a valid command.')
          message.channel.send('To learn how to use the poll bot, do !help.')
          return

      } else {

          //creating a substring that takes just the parameters as a single string
          var args2 = message.content.substring(i + 1)

          //creating a string array that holds all the arguments of the command
          var args3 = args2.split(" ")

      }



      //checking if the user has the correct role to be allowed to use this command
      if (message.member.roles.cache.some(role => role.name === 'Member')) {

          //deleting the command so the channel is cleaner
          message.delete()

          //checking if the required number of arguments has been met
          if (args3.length == 2) {

              //making a small shortcut if the person inputting the command wants their birthday to be addded
              if (args3[0] == "me") {

                

                  //getting the channel id
                  channel = message.channel.id

                  //inserting the user's birthday into the database
                  con.query("INSERT INTO birthday VALUES(? ,?, ?,?);", [username, user, args3[1], channel], function(err, result) {
                      if (err) {
                          message.channel.send('??? There was an error setting the birthday.')
                          console.log(err)
                      } else {
                          message.channel.send('??? The birthday was added successfully!')
                      }

                  })

                  //if the user does not want themselves
              } else {



                      //getting the first mentionned user in the message
                      targetuser = message.mentions.users.first()

                      //getting the user name from the first argument
                      targetuserid = targetuser.id
                      //getting the id from the first argument
                      targetusername = targetuser.username
                      //getting the channel id
                      channel = message.channel.id




                  //making the query to the database
                  con.query("INSERT INTO birthday VALUES(? ,? ,?,?);", [targetusername, targetuserid, args3[1], channel], function(err, result) {
                    
                      //error catching incase the request goes wrong
                      if (err) {
                          message.channel.send('??? There was an error setting the birthday.')
                          console.log(err)
                      } else {
                          message.channel.send("??? The birthday was added successfully!")
                      }

                  })
              }

          } else {
              //giving an error message to the user
              message.channel.send('This is not a valid command.')
              message.channel.send('There must be two parameters given, split using spaces.')
              message.channel.send('To learn how to use the assistant bot, do -help.')

          }

      } else {
          //deleting the command so the channel is cleaner and sending an error message
          message.delete()
          message.channel.send('This discord user is not allowed to add a birthday')
      }


  }

}