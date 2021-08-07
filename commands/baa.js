module.exports = {

    name: 'baa',
    description: "This is a command that outputs a baa!",
    execute(message,args) {
        message.delete(); 
        message.channel.send('Baaaaaa!');
    }

}