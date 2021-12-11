module.exports = {

    //Name and description of the command
    name: 'baa',
    description: "This is a command that outputs a baa!",
    execute(message, args) {
        //deleting the original message and printing baa
        message.delete(); 
        message.channel.send('Baaaaaa!');
    }

}