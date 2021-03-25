const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const duration = moment
    .duration(client.uptime)

    .format(" D [gün], H [saat], m [dakika], s [saniye]");
//Code Universe
 //Code Universe
  let aylartoplamı = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let naberfıstık = aylartoplamı;
//Code Universe
 //Code Universe
  let s = `${moment(client.user.createdAt).format("DD")} ${
    naberfıstık[moment(client.user.createdAt).format("MM")]
  } ${moment(client.user.createdAt).format("YYYY HH:mm:ss")}`;

  const codeuniverse = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setFooter(client.user.tag, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setTitle(`<a:yildiz:822063163755331605> | İstatistik Bilgileri | <a:yildiz:822063163755331605>`)
    .addField(
      "**<a:dance:783278929036967946> | Botun Sahibi | <a:dance:783278929036967946>**",
      "<@630285756337881108>"
    )
    .addField(
      "**<a:ritm:822063148005457921> | Hizmet Verdiği Kullanıcı Sayısı | <a:ritm:822063148005457921>**",
       client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "**<a:siyahtic:785464446553161739> | Hizmet Verdiği Sunucu Sayısı | <a:siyahtic:785464446553161739>**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "**<a:dance:783278949026627605> | Hizmet Verdiği Kanal Sayısı | <a:dance:783278949026627605>**",
      client.channels.cache.size.toLocaleString(),
      false
    )
    .addField("**<a:ayarlar:823469171274547220> | Discord.JS sürümü | <a:ayarlar:823469171274547220>**", "v" + Discord.version, false)
    .addField("**<a:ayarlar:823469171274547220> | Node.JS sürüm | <a:ayarlar:823469171274547220>**", `${process.version}`, false)
    .addField("**<a:loading:823469171013845043> | Ping | <a:loading:823469171013845043>**", client.ws.ping + " ms", false)

    .addField("**<a:yildiz:779321738474946570> | Uptime Süresi | <a:yildiz:779321738474946570>**", duration)
    .addField("**Botun Kuruluş Tarihi**", s);
  return message.channel.send(codeuniverse);
};
//Code Universe
 //Code Universe
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "botbilgi"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "",
  usage: "istatistik"
};
