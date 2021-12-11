module.exports = {

    //name and description of the command
    name: 'map',
    description: "This is command that sends a url",
    execute(message, args) {
        //deleting the original message of the user and sending a link
        message.delete();
        message.channel.send("Note: this won't work when a server without a map is up.")
        message.channel.send(process.env.MAP);
    }

}