const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Warshy")
.setTitle("<a:yildiz:822063163755331605> | Genel Komutlar | <a:yildiz:822063163755331605>")
 .setTimestamp()
.setDescription("<a:ritm:822063148005457921> | **-eğlence** = **Eğlence komutlarını görüntülersiniz.** \n <a:banned:822063148550979614> | **-moderasyon** = **Moderasyon komutlarını görüntülersiniz.** \n <a:woaw:822063149389316107> | **-kullanıcı** = **Kullanıcı komutlarını görüntülersiniz.** \n <a:dorulanmis:822063155629916202> | **-logo** = **Logo komutlarını görüntülersiniz.**")
.setImage("")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}
