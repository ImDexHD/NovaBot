exports.run = function(client, message, args) {
  var argsresult = args.join(' ');
  message.delete();
message.channel.send('**[Server Announcement]**\n ' + args.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5,
  permName: "Manager"
};

exports.help = {
  name: "shout",
  description: "The bot will say the message",
  usage: "shout <message>"
};
