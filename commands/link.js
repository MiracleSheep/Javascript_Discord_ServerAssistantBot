module.exports = {

    //name and description of the command
    name: 'link',
    description: "This is command that sends a url",
    execute(message, args) {
        //deleting the original message of the user and sending a link
        message.delete();
        message.channel.send(process.env.LINK);
    }

}