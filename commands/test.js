const request = require('request');
exports.run = function(client, message, args) {

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 7,
  permName: "Owners"
};

exports.help = {
  name: "test",
  description: "Test command",
  usage: "test"
};

/* test commands
// Fetch webhooks
message.guild.fetchWebhooks()
  .then(webhooks => message.reply(`Fetched ${webhooks.size} webhooks`))
  .catch(console.error);
};

  client.user.setActivity('YouTube', { type: 4 })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);

  // React to a message with a unicode emoji
message.react('🤔')
  .then(console.log)
  .catch(console.error);
*/