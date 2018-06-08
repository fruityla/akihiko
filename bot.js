const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content === 'akihiko') {
        message.reply('I love you');
    }
});
    
if (msgCase.includes("say fuck")) {
var mentions = new Array(10);
var random = getRandomInt(0,7); 
mentions[0] = "... F-fuck?";
mentions[1] = "H-Hamuko!";
mentions[2] = "FUCK!";
mentions[3] = "Don't swear!";
mentions[4] = "Do you ever stop?";
mentions[5] = "fucckkk got dammmmmmmmmmmit sonnnn of a bitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ahhhhhhhhhhhhhhhhhhhhhhhhhhhh I spilled my baja blast";
mentions[6] = "Stop bossing me around!"
mentions[7] = "Tch! Fuck off!";
message.channel.sendMessage(mentions[random]);
};

bot.login(process.env.BOT_TOKEN);
