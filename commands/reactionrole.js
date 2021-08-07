
module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {

        message.delete(); 

        const channel = '873617380822106192';
        const yellowTeamRole = message.guild.roles.cache.get("791727431039057941");
        const blueTeamRole = message.guild.roles.cache.get("856600979285213274");
        const yellowTeamEmoji = '🖥️';
        const blueTeamEmoji = '⛏️';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('React to join a group for notifications!')
            .setDescription('Reacting to an emojii will add you to the notifications of that group\n\n'
                + `${yellowTeamEmoji} for Server related notifications.\n`
                + `${blueTeamEmoji} for Minecraft related notifications.`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                    console.log("added to yellow")
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    console.log("added to blue")
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   