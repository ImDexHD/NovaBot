const Discord = require('discord.js');
exports.run = function(client, message, args) {
    client.users.get(message.author.id).send('**Server IP**: ``mc.novanetwork.tk``');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  permName: "Member"
};

exports.help = {
  name: "ip",
  description: "Server IP",
  usage: "ip"
};
