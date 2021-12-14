module.exports = {

  //Name and description of the command
  name: 'account',
  description: "This is a command that allows a user to request a new account on the website",
  execute(message, args, con) {

      //getting important information about the message
      var i = message.content.indexOf(" ");
      var username = message.author.toString();
      var user = message.author.id;

      //Checking if the command is valid
      if (i == undefined || i == -1 || i == null) {
          message.channel.send('This is not a valid command.');
          message.channel.send('To learn how to use the poll bot, do !help.')
          return;
      } else {
          var args2 = message.content.substring(i + 1);
          var args3 = args2.split(";");

      }

      //Checking if the user has the proper role
      if (message.member.roles.cache.some(role => role.name === 'Member')) {

          message.delete();

          //checking for the correct number of arguments
          if (args3.length == 2) {


              //Making a query to insert the account information to the database
              con.query("INSERT INTO credentials VALUES(? , ? , ?);", [user, args3[0], args3[1]], function(err, result) {
                  //error catching
                  if (err) {
                      message.channel.send('There was an error creating your account.')
                  } else {
                      //Returning a success message to the user
                      message.channel.send('<@' + user + '>, your account was created successfully!')
                  }

              })

          } else {
              //if the command is invalid
              message.channel.send('This is not a valid command.');
              message.channel.send('There must be two parameters given, split using semicolons.');
              message.channel.send('To learn how to use the assistant bot, do -help.')

          }

      } else {
          //if the user already has an account
          message.delete();
          message.channel.send('This discord user is not viable to receive an account');
      }


  }

}