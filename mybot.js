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
  //if(message.author.id !== config.myID) return;
  if (message.content.indexOf(prefix) !== 0) return;
 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'blah') {
    message.channel.send('Meh.');
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
          value: "?ping, ?blah"
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