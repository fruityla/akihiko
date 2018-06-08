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
    
bot.login(process.env.BOT_TOKEN);
