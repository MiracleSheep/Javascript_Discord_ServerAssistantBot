module.exports = {

    name: 'help',
    description: "This is a help command",
    execute(message,args) {

         const embed = {
            color: "#0099ff",
            title: "Assistant bot help page",
            //url: 'https://discord.js.org',
            author: {
              name: 'Assistant bot',
              icon_url: 'https://www.pikpng.com/pngl/m/46-467315_royalty-free-library-sheep-png-elegant-animals-with.png',
              url: 'https://discord.js.org',
            },
            //description: 'Multiple choice poll',
            thumbnail: {
              //url: 'https://i.imgur.com/wSTFkRM.png',
            },
            fields: [
              {
                name: "1: Help command:",
              value: "Use -help or -h to trigger",
                inline: false,
              },
              {
                name: "2: Ping command",
                value: "Do -ping for a response",
                inline: false,
              },
              {
                name: "4: Server Home Page",
                value: "Do -web",
                inline: false,
              },
            ],
            // image: {
            //   url: 'https://i.imgur.com/wSTFkRM.png',
            // },
            timestamp: new Date(),
            footer: {
              text: 'This is a small reminder of the commands this bot has.',
              //icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
          };

          message.delete(); 
         message.channel.send({ embed });

    }

}