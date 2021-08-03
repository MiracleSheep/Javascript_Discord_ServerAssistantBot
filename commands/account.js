module.exports = {

    name: 'account',
    description: "This is a command that allows a user to request a new account on the website",
    execute(message,args) {
        
        
        var i = message.content.indexOf(" ");
        var username = message.author.toString();
        //const memberRole = message.guild.roles.cache.find(role => role.name === "Member");
        var user = message.author.id;
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





        if(message.member.roles.cache.some(role => role.name === 'Member')) {

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
        message.channel.send('This discord user is not viable to receive an account on the server website ');
      }
        

    }

}