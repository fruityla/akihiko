const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content === 'akihiko') {
        message.reply('ready!');
    }
});
    
bot.on("guildMemberAdd", function(member){
    var membername = member.toString();
    var sentences = new Array(10);
    var random = getRandomInt(0,4); // lay random so (so' toi thieu, so' toi da)
    sentences[0] = "It's about time you got here, "+membername;
    sentences[1] = membername+", welcome home.";
    sentences[2] = membername+", where have you been?";
    sentences[3] = membername+", nice timing!";
    sentences[4] = membername+", let's have a great match!";
    member.guild.channels.find("name","tartarus").sendMessage( sentences[random]);
});

bot.login(process.env.BOT_TOKEN);
