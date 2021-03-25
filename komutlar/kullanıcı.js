const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Warshy")
.setTitle("<a:yildiz:822063163755331605> | Kullanıcı Komutları | <a:yildiz:822063163755331605>")
 .setTimestamp()
.setDescription("<a:pembeok:822063142444072980> | **-avatar** = **Avatarınıza bakarsınız.**  \n <a:pembeok:822063142444072980> | **-yetkilerim** = **Yetkilerini görürsün.**  \n <a:pembeok:822063142444072980> | **-profil** = **Profilini görürsün.**  \n <a:pembeok:822063142444072980> | **-sunucuresmi** = **Sunucu resmini gösterir.**  \n <a:pembeok:822063142444072980> | **-ping** = **Botun Pingine Bakarsın.**  \n <a:pembeok:822063142444072980> | **-id** = **Birisinin id'sine Bakarsın.**  \n <a:pembeok:822063142444072980> | **-davet** = **Beni Sunucuna Ekle.**  \n <a:pembeok:822063142444072980> | **-botbilgi** = **Bot istatistiklerini görürsünüz.**  \n <a:pembeok:822063142444072980> | **-bug-bildir** = **Yazdığınız bug'u yapımcılarıma bildirir.** ")
.setImage("")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}
