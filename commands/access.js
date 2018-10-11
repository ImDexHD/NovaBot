exports.run = function(client, message, args) {
  //Roles
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
        if(permlvl === 7){
        return message.channel.send(`Your access level is ${permlvl} (**Owner**)`);
      } else if(permlvl === 6){
        return message.channel.send(`Your access level is ${permlvl} (**Co Owner**)`);
      } else if(permlvl === 5){
        return message.channel.send(`Your access level is ${permlvl} (**Manager**)`);
      } else if(permlvl === 4){
        return message.channel.send(`Your access level is ${permlvl} (**Head Admin**)`);
      } else if(permlvl === 3){
        return message.channel.send(`Your access level is ${permlvl} (**Admin**)`);
      } else if(permlvl === 2){
        return message.channel.send(`Your access level is ${permlvl} (**Moderator**)`);
      } else if(permlvl === 1){
        return message.channel.send(`Your access level is ${permlvl} (**Helper**)`);
      } else if(permlvl === 0){
        return message.channel.send(`Your access level is ${permlvl} (**Member**)`);
      }
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "access",
  description: "Show the access level of you/someone",
  usage: "access [user]"
};
