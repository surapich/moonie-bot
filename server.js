const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

try {
  client.login(process.env.BOT_TOKEN);
} catch (error) {
  console.log(error.message);
  process.exit(-1);
}

const wildIcon = "https://cdn.discordapp.com/emojis/666459920551510016.png?v=1";
const waveIcon = "https://cdn.discordapp.com/emojis/749494213770477628.png?v=1";

client.on("ready", () => {
  console.log("Bot is ready");

  client.on("message", (message) => {
    let content = message.content;
    let embeds = message.embeds;

    // if (content.includes("found a wild")) {
    //   var user = content.substr(0, content.indexOf("found a wild"));

    //   setTimeout(() => {
    //     message.channel.send(`${user}your *pokemon* is ready`);
    //   }, 11 * 1000);
    // }

    if (embeds && embeds.length > 0) {
      let embed = embeds[0];

      let icon = embed.author.iconURL;
      let desc = embed.description;

      // * Wild
      if (icon === wildIcon) {
        let user = desc.substr(0, desc.indexOf("found a wild"));

        setTimeout(() => {
          message.channel.send(`${user}your **pokemon** is ready`);
        }, 11 * 1000);
      }

      // * Fish
      if (icon === waveIcon) {
        let user = desc.substr(0, desc.indexOf("cast out a"));

        setTimeout(() => {
          message.channel.send(`${user} your **fish** is ready`);
        }, 25 * 1000);
      }
    }
  });
});
