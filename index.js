﻿﻿require('dotenv').config();

console.log(process.env.GOOGLE_API_TOKEN);
console.log(process.env.DISCORD_BOT_TOKEN);

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on("ready", () => {
  console.log("I am ready!");
});
// Set the prefix

// const prefixes = ['!', '?']; // Example prefixes, replace with your actual prefixes

client.on('messageCreate', (message) => {

  const messageContent = message.content;

  console.log(message.content);
  const parts = messageContent.split('>');
  
  let textAfter = '';
  if (parts.length > 1) {
    textAfter = parts[1].trim(); // This will give you "boss"
  } else {
    return;
  }

  console.log(textAfter); 

  if (textAfter === "Hi") {
    message.channel.send("Hello");
  }


  if (textAfter === "ping") {
    //
    message.channel.send("Pinging...").then(m => {
      // The math thingy to calculate the user's ping
      var ping = m.createdTimestamp - message.createdTimestamp;

      // Basic embed
      var embed = new Discord.MessageEmbed()
        .setAuthor(`Your ping is ${ping}`)
        .setColor("Your Color")

      // Then It Edits the message with the ping variable embed that you created
      m.edit(embed)
    });
  }
  const fetch = require('node-fetch');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GOOGLE_API_TOKEN}`;
  console.log(url);
  const headers = {
    'Content-Type': 'application/json'
  };
  const body = JSON.stringify({
    contents: [
      {
        parts: [
          { text: textAfter }
        ]
      }
    ]
  });
  
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: body
  })
    .then(response => response.json())
    .then(data => {
      // Extract the text from the response
      const text = data.candidates[0].content.parts[0].text;
      const limitedText = text.slice(0, 2000); // Limit the text to 1000 characters
      message.channel.send(limitedText);
      console.log(text); // Output the extracted text
    })
    .catch(error => console.error('Error:', error));
  


});


// client.on("message", (message) => {

// for(const thisPrefix of prefixes) {
//   if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
// }
// if(!prefix) return;
//   if (!message.content.startsWith(prefix) || message.author.bot) return;

//   if (message.content.indexOf(prefix) !== 0) return;

//   const args = message.content.slice(prefix.length).trim().split(/ +/g);
//   const command = args.shift().toLowerCase();
//   //Bunnyla Command
//   if (command === 'boss' || command === 'wb') {
//     message.channel.send('https://s1.pearlcdn.com/SEA/Upload/WIKI/c79e9b8602620200624155615445.jpg');
//   } else if (command === 'playlist' || command === 'pl'){
//     message.channel.send('-p http://bit.ly/oursdicordmusic');
//   } else if (command === 'marni' || command === 'mn'){
//     message.channel.send('https://cdn.discordapp.com/attachments/570516637602545685/581456225372471298/marnies_stone_guide_update_underwater_content.png');
//   } else if (command === 'brackets' || command === 'br'){
//     message.channel.send('https://cdn.discordapp.com/attachments/599514794185326625/742046034514936008/oVJmdny.png');
//   } else if (command === 'caphras' || command === 'cpr'){
//     message.channel.send('https://cdn.discordapp.com/attachments/599514794185326625/713725578045423626/caphras.png');
//   } else if (command === 'maps' || command === 'bartermaps'){
//     message.channel.send('https://media.discordapp.net/attachments/599514794185326625/691364487164330034/NPCBarterLoc.png');
//   } else if (command === 'fruit' || command === 'fruitsof'){
//     message.channel.send('https://cdn.discordapp.com/attachments/599514794185326625/694031136153665547/unknown.png');
//   } else if (command === 'ccshop' || command === 'seacoin'){
//     message.channel.send(' https://cdn.discordapp.com/attachments/599514794185326625/707372956321448026/bdo-rebinia-seacoins.png');
//   }

//   // Private Command
//   if(command === 'feli') {
//     if(message.author.id !== process.env.pID) return;
//     message.channel.send('<@357696697251659777>! UWU!'); 
//   } else if(command === 'ping') { 
//   // It sends the user "Pinging"
//     message.channel.send("Pinging...").then(m =>{
//     // The math thingy to calculate the user's ping
//      var ping = m.createdTimestamp - message.createdTimestamp;

//     // Basic embed
//       var embed = new Discord.MessageEmbed()
//       .setAuthor(`Your ping is ${ping}`)
//       .setColor("Your Color")

//       // Then It Edits the message with the ping variable embed that you created
//       m.edit(embed)
//   });
//   } else if (command === 'blah') {
//     message.channel.send('Meh.');
//   }

//   if (command === "hi") {
//     let blu = args;
//     message.channel.send(`Hi ${blu} ⛄❄🥔`);
//   }
//   if(command === "help"){
//     message.channel.send({embed: {
//       color: 3447003,
//       author: {
//         name: client.user.username,
//         icon_url: client.user.avatarURL
//       },
//       title: "Command List :",
//       url: "http://google.com",
//       description: "UWU",
//       fields: [{
//           name: "MyPrivateCommands",
//           value: "?ping, ?blah, ?feli"
//         },
//         {
//           name: "Black Desert Online Commands",
//           value: "?boss, ?marni, ?brakets, ?caphras, ?maps, ?fruit"
//         },
//         {
//           name: "Single Argument Commands",
//           value: "?hi [arguments](http://google.com)"
//         }
//       ],
//       timestamp: new Date(),
//       footer: {
//         icon_url: client.user.avatarURL,
//         text: "© SSS"
//       }
//     }
//   });
//   }// });
console.log(process.env.DISCORD_BOT_TOKEN)

// client.login(process.env.DISCORD_BOT_TOKEN)
//   .then(() => {
//     console.log('Bot logged in successfully!');
//   })
//   .catch((error) => {
//     console.log(process.env.DISCORD_BOT_TOKEN)
//     console.error('Error logging in:', error);
//   });

