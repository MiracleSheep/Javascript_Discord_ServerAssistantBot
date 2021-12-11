module.exports = {

    //name and description
    name: 'ping',
    description: "This is a ping command",
    execute(message, args) {
        //deleting the original message of the user and printing pong 
        message.delete();
        message.channel.send('pong!');
    }

}