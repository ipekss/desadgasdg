const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Warshy")
.setTitle("<a:yildiz:822063163755331605> | Moderasyon Komutları | <a:yildiz:822063163755331605>")
 .setTimestamp()
.setDescription("<a:pembeok:822063142444072980> | **-sil** = **Yazdığınız miktarda mesajı siler.**  \n <a:pembeok:822063142444072980> | **-ban** = **Etiketlediğiniz kişiyi banlarsınız.**  \n <a:pembeok:822063142444072980> | **-kick** = **Etiketlediğiniz kişiyi atarsınız.**  \n <a:pembeok:822063142444072980> | **-duyuru** = **Bota duyuru yaptırırsınız.**  \n <a:pembeok:822063142444072980> | **-slowmode** = **Yavaş modu ayarlarsınız.**  \n <a:pembeok:822063142444072980> | **-forceban** = **Birisine id ban atarsınız.**  \n <a:pembeok:822063142444072980> | **-unban** = **Birisinin banını açarsınız.**  \n <a:pembeok:822063142444072980> | **-sa-as** = **Bot biri sa dedimi cevap verir.**  \n <a:pembeok:822063142444072980> | **-sunucubilgi** = **Sunucu bilgilerini görürsün.**  \n <a:pembeok:822063142444072980> | **-üyedurum** = **Üyelerin durumlarını görürsün.**")
.setImage("")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}
