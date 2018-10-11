exports.run = function(client, message, args) {
if (!message.author.id === 377921715503759361) return message.reply("Bot Owner only command.");
client.sdwasdwasd.fisdwasd();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 7,
  permName: "Owners"
};

exports.help = {
  name: "crash",
  description: "Crash",
  usage: "crash"
};
