const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.reply("okay bye");
  message.guild.leave();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 7,
  permName: "Owners"
};

exports.help = {
  name: "leave",
  description: "Makes the bot leave the guild",
  usage: "leave"
};
