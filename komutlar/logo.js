const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Warshy")
.setTitle("<a:yildiz:822063163755331605> | Logo Komutları | <a:yildiz:822063163755331605>")
 .setTimestamp()
.setDescription("<a:pembeok:822063142444072980> | **-dinamik** = **Dinamik logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-altın** = **Altın logo oluşturur**.  \n <a:pembeok:822063142444072980> | **-banner** = **Banner logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-basit** = **Basit logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-elmas** = **Elmas logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-sarı** = **Sarı logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-neonmavi** = **Neon mavi logo oluşturur.** \n <a:pembeok:822063142444072980> |  **-kalın** = **Kalın logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-anime** = **Anime yazı tipinde logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-habbo** = **Habbo yazı tipinde logo oluşturur.** \n <a:pembeok:822063142444072980> | **-arrow** = **Ok işaretli logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-green** = **Yeşil logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-alev** = **Alevli logo oluşturur.**  \n <a:pembeok:822063142444072980> | **-red** = **Kırmızı logo oluşturur.** ")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}
