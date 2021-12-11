module.exports = {

  //name and description
  name: 'help',
  description: "This is a help command",
  execute(message, args) {

      //creating an embed to hold all the information for 
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
          fields: [{
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
                  name: "3: Server Web Page",
                  value: "Do -web",
                  inline: false,
              },
              {
                  name: "4: Account Request",
                  value: "Do -account <username>;<password>",
                  inline: false,
              },
              {
                  name: "5: Add Birthday",
                  value: "Do -badd <@user>(or type me for yourself) <YYYY-MM-DD>",
                  inline: false,
              },
              {
                  name: "6: Remove Birthday",
                  value: "Do -brm <@user>(or type me for yourself)",
                  inline: false,
              },
              {
                  name: "7: When is a Birthday",
                  value: "Do -bday <@user>(or type me for yourself)",
                  inline: false,
              },
              {
                  name: "8: Get Server Map",
                  value: "Do -map",
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

      //deleting the original command and printing the embed
      message.delete();
      message.channel.send({
          embed
      });

  }

}