module.exports = {

    name: 'news',
    description: "This is a news notification command",
    execute(message,args) {
        if (message.member.roles.cache.has(process.env.ROLE)) {
            message.delete(); 
            message.channel.send('Disabling notifications for ' + message.author.tag);
            message.member.roles.remove(process.env.ROLE);

        } else {
            message.delete(); 
            message.channel.send('Enabling notifications for ' + message.author.tag);
            message.member.roles.add(process.env.ROLE)
        }
    }
}