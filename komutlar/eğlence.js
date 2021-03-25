const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Warshy")
.setTitle("<a:yildiz:822063163755331605> | Eğlence Komutları | <a:yildiz:822063163755331605>")
 .setTimestamp()
.setDescription("<a:pembeok:822063142444072980> | **-tersyazı** = **Bir Yazıyı Bot Ters Yazar.** \n <a:pembeok:822063142444072980> | **-mcskin** = **Yazdığınız ismin minecraft görünüşünü atar.**  \n <a:pembeok:822063142444072980> | **-fbi** = **Bot FBi Gif Atar.**  \n <a:pembeok:822063142444072980> | **-token** = **Tokenimi Öğrenmek İstemezmisin?**  \n <a:pembeok:822063142444072980> | **-düello** = **Düello Atarsın.**  \n <a:pembeok:822063142444072980> | **-wasted** = **Polis tarafından yakalanırsın.**  \n <a:pembeok:822063142444072980> | **-atatürk** = **Dene ve gör... (1881-1938)** ")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}
