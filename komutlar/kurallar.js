const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTitle("İşte Bu Sunucunun Kuralları")
  .setDescription("<a:dorulanmis:788002854388367391> Kişisel değerlere hakaret, kişiye hakaret, din, dil, ırk ayrımın ve siyasi tartışmalar yapmak yasaktır. \n <a:dorulanmis:788002854388367391> Odalar içerisinde insanları rahatsız edecek şekilde troll yapmak, bass açmak, küfür, argo ve şiddet içeren söylemler,Sohbet metin ve ses kanallarında spam, flood, reklam vb gibi şeyler yapmak. \n <a:dorulanmis:788002854388367391> Kan, vahşet ve cinsel içerikli paylaşımlar yapmak,Kişisel sorunları sunucuya yansıtıp insanları rahatsız etmek,\n <a:dorulanmis:788002854388367391> Sunucu & DM yolu ile izinsiz reklam & pazarlık & alım - satım vb. eylemlerin uygulanması yasaktır \n <a:dorulanmis:788002854388367391> !Sunucu içerisinde olay çıkartmak, üyeleri kışkırtmak ve kaos yaratmak yasaktır. \n <a:dorulanmis:788002854388367391> Her kural yazılı olmak zorunda değildir,herkes yaptığı hareketten sorumludur. \n <a:dorulanmis:788002854388367391> Bot Komutlarını Kendi Odaları Dışında Kullanmak Yasaktır. \n <a:dorulanmis:788002854388367391> Yetkililerin Haberi Olmağı Sürece @everyone Kullanımı Yasaktır. \n <a:dorulanmis:788002854388367391> Reklam Veya Tanıtım Yapmak . \n <a:dorulanmis:788002854388367391> Alt Yetkili Olan  Birisi Üst Yetkili Birisinin Bağlantısını Kesmesi Yasaktır. \n <a:dorulanmis:788002854388367391> Sunucumuza BOOST Basanlar Tagını Çıkarmadan Kendine Özel İsim Yapabilirler . \n <a:banned:788002861463109633> Lütfen Dikkat <a:banned:788002861463109633>  @everyone @here")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: '',
  usage: ''
};
