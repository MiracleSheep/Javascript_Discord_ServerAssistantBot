module.exports = {

    name: 'link',
    description: "This is command that sends a url",
    execute(message,args) {
        message.delete(); 
        message.channel.send(process.env.LINK);
    }

}