const Discord = require('discord.js');
const client = new Discord.Client();
const config = new require("./config.json");
const moment = new require('moment');
//const ms= new require('ms');
const fs = require('fs');
require('./util/eventLoader')(client);

const log = (msg) => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if(err) console.log(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.elevation = function(message) {
  let user = message.mentions.users.first();
  let OwnerRole = message.guild.roles.find("name", "Owners");
  let coownerRole = message.guild.roles.find("name", "Co Owner");
  let managerRole = message.guild.roles.find("name", "Manager");
  let headAdminRole = message.guild.roles.find("name", "Head Admin");
  let adminRole = message.guild.roles.find("name", "Admin");
  let modRole = message.guild.roles.find("name", "Moderator");
  let helRole = message.guild.roles.find("name", "Helper");
  // Roles
  if(message.mentions.users.size < 1){
    let permlvl = 0;
    
    if(message.member.roles.has(helRole.id)){
      permlvl = 1;
    }
    if(message.member.roles.has(modRole.id)){
      permlvl = 2;
    }
    if(message.member.roles.has(adminRole.id)){
      permlvl = 3;
    }
    if(message.member.roles.has(headAdminRole.id)){
      permlvl = 4;
    }
    if(message.member.roles.has(managerRole.id)){
      permlvl = 5;
    }
    if(message.member.roles.has(coownerRole.id)){
      permlvl = 6;
    }
    if(message.member.roles.has(OwnerRole.id)){
      permlvl = 7;
    }
    return permlvl;
  }
};

function clean(text) {
  if (typeof(text) === "string")
  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
  return text;
}


// Warnings and ERRORS
//client.on('debug', e => {
//    console.log(e);
//});
client.on('warn', e => {
    console.log(e);
});
client.on('error', e => {
    console.log(e);
});

//client.login("NDk1MzA1MDkyNjY1MTgwMTYw.DpFGxQ.0DFRr7D5V3LoftDLq5RYE3UvYTo");
client.login(process.env.BOT_TOKEN);
