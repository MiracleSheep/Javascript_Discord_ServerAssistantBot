module.exports = {

    name: 'account',
    description: "This is a command that allows a user to request a new account on the website",
    execute(message,args) {
        
        
        var i = message.content.indexOf(" ");
        var user = message.author.toString();
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


        message.delete(); 

        if (args3.length == 2) {
            
          con.query("INSERT INTO credentials VALUES(? , ? , ?);", [message.author.id,args3[0],args3[1]], function (err, result) {
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
        

    }

}