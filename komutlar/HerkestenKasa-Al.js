const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let user = message.author;
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`Kasa Gir l1 l2 l3`);
    message.channel.send(embed);
    return;
  }
  
if (!args[1]) {
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`kaç tane `);
    message.channel.send(embed);
    return;
  }
  if (args[0] == "l1") {
    message.guild.members.cache.forEach(x => {
      db.add(`l1_${x.id}`, -args[1]);
    });
    message.channel.send("Oluyor..");
  } else if (args[0] == "l2") {
    message.guild.members.cache.forEach(x => {
      db.add(`l2_${x.id}`, -args[1]);
    });
    message.channel.send("Oluyor...");
  } else if (args[0] == "l3") {
    message.guild.members.cache.forEach(x => {
      db.add(`l3_${x.id}`, -args[1]);
    });
    message.channel.send("Oluyor...");
  } else return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "al",
  description: "al",
  usage: "al"
};