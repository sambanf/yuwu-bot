﻿const Discord = require("discord.js");
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
  if (command === 'boss' || command === 'wb') {
    message.channel.send('https://cdn.discordapp.com/attachments/599514794185326625/697272169314648084/23c3181833120200408072136959.png');
  } else if (command === 'playlist' || command === 'pl'){
    message.channel.send('-p http://bit.ly/oursdicordmusic');
  } else if (command === 'marni' || command === 'mn'){
    message.channel.send('https://cdn.discordapp.com/attachments/570516637602545685/581456225372471298/marnies_stone_guide_update_underwater_content.png');
  } else if (command === 'brackets' || command === 'br'){
    message.channel.send('https://cdn.discordapp.com/attachments/599514794185326625/665386507036524571/brackets.png');
  } else if (command === 'caphras' || command === 'cpr'){
    message.channel.send('https://cdn.discordapp.com/attachments/599514794185326625/713725578045423626/caphras.png');
  } else if (command === 'maps' || command === 'bartermaps'){
    message.channel.send('https://media.discordapp.net/attachments/599514794185326625/691364487164330034/NPCBarterLoc.png');
  } else if (command === 'fruit' || command === 'fruitsof'){
    message.channel.send('https://cdn.discordapp.com/attachments/599514794185326625/694031136153665547/unknown.png');
  } else if (command === 'ccshop' || command === 'seacoin'){
    message.channel.send(' https://cdn.discordapp.com/attachments/599514794185326625/707372956321448026/bdo-rebinia-seacoins.png');
  }
  
 
  // Private Command
  if(command === 'feli') {
    if(message.author.id !== process.env.pID) return;
    message.channel.send('<@357696697251659777>! Fuck You!'); 
  } else if(command === 'ping') {
    message.channel.send('Pong!');
  } else if (command === 'blah') {
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
          name: "MyPrivateCommands",
          value: "?ping, ?blah, ?feli"
        },
        {
          name: "Black Desert Online Commands",
          value: "?boss, ?marni, ?brakets, ?caphras, ?maps, ?fruit"
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

