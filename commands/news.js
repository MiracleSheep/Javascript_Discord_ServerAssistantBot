module.exports = {

    name: 'news',
    description: "This is a news notification command",
    execute(message,args) {
        if (message.member.roles.cache.has('838932627025166417')) {
            message.delete(); 
            message.channel.send('Disabling notifications for ' + message.author.tag);
            message.member.roles.remove('838932627025166417');

        } else {
            message.delete(); 
            message.channel.send('Enabling notifications for ' + message.author.tag);
            message.member.roles.add('838932627025166417')
        }
    }
}