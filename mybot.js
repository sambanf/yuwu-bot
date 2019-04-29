const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});
// Set the prefix
const prefixes = ['?', '/'];
let prefix = false;
client.on("message", (message) => {
  
for(const thisPrefix of prefixes) {
  if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
}
if(!prefix) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if (message.content.indexOf(prefix) !== 0) return;
 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // Public Command
  if(command === 'ping') {
    message.channel.send('Pong!');
  } else if (command === 'blah') {
    message.channel.send('Meh.');
  } else if (command === 'boss') {
    message.channel.send('https://cdn.discordapp.com/attachments/570573395016548355/570574119460929536/71b14f92ef420190313083736783.jpg');
  } 

  // Private Command
  if(command === 'feli') {
    if(message.author.id !== process.env.pID) return;
    message.channel.send('<@357696697251659777>! Fuck You!'); 
  }
  
  if (command === "hi") {
    let blu = args;
    message.channel.send(`Hi ${blu} ⛄❄🥔`);
  }
  if(command === "help"){
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Command List :",
      url: "http://google.com",
      description: "UWU",
      fields: [{
          name: "Single Commands",
          value: "?ping, ?blah, ?feli"
        },
        {
          name: "Single Argument Commands",
          value: "?hi [arguments](http://google.com)"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© SSS"
      }
    }
  });
  }
});

client.login(process.env.token);