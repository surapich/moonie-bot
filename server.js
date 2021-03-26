const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

try {
  client.login(process.env.BOT_TOKEN);
} catch (error) {
  console.log(error.message);
  process.exit(-1);
}

let messages = [];

client.on("ready", () => {
  console.log("Bot is ready");

  client.on("message", (message) => {
    let content = message.content;

    if (content.includes("found a wild")) {
      var user = content.substr(0, content.indexOf("found a wild"));

      setTimeout(() => {
        message.channel.send(`${user}your *pokemon* is ready`);
      }, 11 * 1000);
    } else if (!content && message.author.id === "664508672713424926") {
      setTimeout(() => {
        message.channel.send(`**Fish** is ready`);
      }, 25 * 1000);
    }
  });
});
