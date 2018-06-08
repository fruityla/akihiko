cconst Discord = require("discord.js");
var bot = new Discord.Client();

const token = "Mzg0NTc0NDY2NTY0NDIzNjkw.DP0ycQ.HH7VpXW1pJnQJ48Ior1DmBISXws";
const PREFIX = ".";

/RANDOM WELCOME FUNCTION /
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

bot.on("ready", function(){
    console.log("I've been waiting for this!");
});

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
