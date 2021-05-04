module.exports = {

    name: 'ping',
    description: "This is a ping command",
    execute(message,args) {
        message.delete(); 
        message.channel.send('pong!');
    }

}