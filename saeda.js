const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})

////Saeda
client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '1wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join(913157962946723861) 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**بچۆ ڤۆیس ئینجا فەرمانکە**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/3FfXdpg6qG`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("913157456958476298").send(
`> ریکلام: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })

/////////////Ranjo
client.on("message", msg => {
  if (msg.content === "Slaw reklam ") {
    msg.reply("**Bo Mne Bnera Dll**");
  }
}); 

//////////////Ranjo
client.on("message", msg => {
  if (msg.content === "Slawrk") {
    msg.reply("**Bo Mne Bnera Dll**");
  }
}); 
///////////////Ranjo
client.on("message", msg => {
  if (msg.content === "Reklam") {
    msg.reply("**Bo Mne Bnera Dll**");
  }
}); 
///////////////ranjo
client.on("message", msg => {
  if (msg.content === "reklam haea") {
    msg.reply("**Bo Mne Bnera Dll**");
  }
}); 
///////////////رەنجۆ
client.on("message", msg => {
  if (msg.content === "سلاو ریکلام") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////رەنجۆ
client.on("message", msg => {
  if (msg.content === "سلاو ریکلام هەیە") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////رەنجۆ
client.on("message", msg => {
  if (msg.content === "ریکلام") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////رەنجۆ
client.on("message", msg => {
  if (msg.content === "ریکلام هەیە") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////رەنجۆ
client.on("message", msg => {
  if (msg.content === "ریکلام دەکەن") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////رانجۆ
client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ڕیکلامەکە بنێرە بۆمن دایدەنێم`) 
});

////RANJO up


client.login("MTAwNjE3NDc4NDUyNDEzMjQ2Mw.GI9Bzx.FFNzXswBmNojOM5lATAMQrB5CB6yJ_UMOOK9ts"); ///تۆکین دانێ 
