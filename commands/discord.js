exports.run = function(client, message, args) {
message.channel.send("** Nova Invite:** http://novanetwork.tk/discord");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['link','invite'],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "discord",
  description: "Official Server Invite",
  usage: "discord"
};
