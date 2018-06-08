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

/WELCOME/ 

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

/**SAYINGS**/

var talk = ["Oh, worm.",
"Hewwo.",
".hamuko I love you.",
"NO VORE",
"There are times when things won't go the way you want them to, but you can't get impatient. Just take it slow.",
"That was some great training.",
"Two extra-large specials, please",
"I've been waiting for this!",
"H-Hey there! What great timing to see you here! Good one! I’m going to the Beef Bowl place, wanna come with…?",
"Did you see that, Shinji?!",
"If you don’t eat right, you’ll never grow stronger.",
"Don't over do it.",
"I hope you know CPR, because you just took my breath away! Or maybe it was the hour I spent on this treadmill.",
"If I had to rate you from 1-10, I would rate you as 9 because I am the one you’re missing.",
"Hey baby, are you a boxer? You should because you're one hell of a knock out!",
".hamuko If God made anything more beautiful than you, I’m sure he’d keep it for himself.",
"I must be a vitamin you desperately need to sustain muscle tone because I want to be inside you every day.",
"Did you hear the latest health report? It said you're supposed to increase your intake of vitamin ME.",
"Are you a camera? Because every time I look at you, I smile",
"Are you an egg? Because I really like protein.",
"I should be working out right now, but I'm talking to you. Wanna catch a movie?",
"Would you mind calling me… Aki?",
"If I had a star for every time you brightened my day, I’d have a galaxy in my hand",
".hamuko what's a dab?",
"Wow… This got awkward all of a sudden…",
"You’re pretty good with your hands, I guess?",
"I’ve been waiting for this!",
"Are you trying to act all cool by yourself? I’ll handle this.",
"…So do your best and do a good job, okay?",
"I’ll be sure to make you happy.",
"My body is hard but the time away from you is harder.",
"My body is hard.",
".hamuko I won't go easy on you just because you're a girl.",
"It feels nice.",
"*> Akihiko laughs...*",
"But, I'm drenched in sweat...",
"This is nothing. I'll be fine.",
"*> Akihiko seems happy...*",
"*> Akihiko seems a little embarrassed...*",
"I don't want to deal with this kind of thing.",
"...Achoo!",
"*> Akihiko seems proud...*",
"*> Akihiko falls silent and looks off into the distance...*",
"...I won't be able to save anything.",
"Make sure you take a bath today so you don't catch a cold.",
"Look, can you get out of the way, please?",
"If you join me, we're going to do more than just run every day, okay?",
"YEET",
".hamuko BLEASE",
"FUCK!",
"...I'm not strong enough to carry this entire burden...",
"...Oh, right. Sorry.",
"*> Akihiko seems apologetic...*",
"*> Akihiko nods seriously...*",
"Yeah... That might be nice for a change.",
"*> Akihiko seems determined.*",
"That was rather sweet...",
"...That's not important right now.",
"...I'm glad to hear you say that.",
".hamuko ...I had fun today.",
"It's nice to have sweet things once in a while.",
"Maybe you could make me something sweet sometime. Like... Pancakes sound good.",
"Now, let's go home.",
"It's not like I could do anything about that...",
"*> Akihiko smiles gently...*",
"I guess... I get nervous.",
"Is there any way... that you can avoid having to fight?",
"No, that's not it!",
"...Sorry. I'm confused, myself...",
"*> Akihiko avoids your face and turns towards the ground...*",
"Why're you so...?",
"*> Akihiko bites down on his lip...*",
"Why... did she have to die?",
"*> Akihiko's lips are trembling...*",
"*> Akihiko's voice is trembling...*",
"I can't do anything about the anger and sadness that I feel...",
"*> Akihiko hides his face from you in his pain...*",
"*> Akihiko is glaring at you for some reason...*",
"N-No, of course not!",
"*> Akihiko is flustered...*",
"It's really strange...",
"I feel all tense and on edge...",
".hamuko I'd... like to know how you feel.",
"*> Akihiko suddenly embraces you...*",
"Y-Yeah, I guess I should.",
"...Is this better?",
"*> Akihiko seems relieved...*",
"Don't you think it looks like you?",
"I kept telling myself I was doing everything I could...",
"I wonder how things would've gone if you hadn't come here...",
"...Come on, don't laugh like that.",
".hamuko ...You're the only one I can act this way around.",
"This... is my last chance, after all.",
"All I did was box for all three years...",
"We had some good times together. I enjoyed those.",
"If we hadn't been in the same dorm, we might never have even met... The world seems mysterious that way...",
"Nice try, man.",
"Don't be stupid...",
"K-Keep your voice down!",
"Whoa! I'm not letting you win that easily!",
"How dumb can you get?",
"All right... we're doing this!",
"I'm in command!",
"I agree...",
"Heh... Don't worry about me.",
"Hey, stop crying! You're making me feel bad...",
"Got it.",
"Okay, I'll let everyone know.",
"Now, that's more like it.",
".hamuko make sure you don't get separated, okay?",
"*> It seems Akihiko is very happy to see you...*",
"I'm sorry, but I won't take no for an answer.",
"I want you to come with me.",
"...Now it all makes sense.",
"Answer me!",
"Why didn't you come talk to me...?",
"I still have things to do, right?",
"You're so stubborn.",
"Why are you always like that?",
"You look half dead.",
"I don't plan on running away.",
"...You got me.",
".hamuko are you free tonight?",
"What, are you cold?",
".hamuko your ears are like ice...",
".hamuko you wanna come over to my room...?",
"I don't believe in superstitions.",
"Alright, alright!",
"Tch, I've lost my appetite.",
"...You just better eat it all.",
"I want you all to know, I won't forget you!",
"...This is going to be easy.",
"No hesitation.",
"I'll defeat you, no matter what you are!",
".hamuko ...?! Wait... Are you going to go alone!?",
"Dammit... Not again...!",
"This isn't something we should be crying about...",
".hamuko I miss you.",
"Here, eat up.",
"I love my wife.",
"There you are, you sons of bitches!",
"Wherever we are, we're together, and that's all that counts.",
"Stay safe, okay?",
"Whaddya want?",
"Don't hold back...",
"Come with me, I won't let you get hurt.",
"I love you, and I will love you until I die, and if there's a life after that, I'll love you then.",
"You have me. Until every last star in the galaxy dies. You have me.",
"…Come on, don’t laugh like that.",
"What am I supposed to do if I lose you too!?",
"Uh… If you want… Do you want to come to my room?",
"Oh… sorry… I’m… kind of nervous… Don’t look at me too much.",
"This is… for me? This is a bit… cute for me, don’t you think?",
"…Don’t worry. We won’t change, even after this is all over.",
"C'mon, say something… Or do I have to find another way to communicate with you?",
"D-don't think I'm gonna lose control or anything because I let you in here...",
"You're beautiful, of course.",
"Starting now, we'll never be apart.",
"A fight's no fun if someone else is protecting you the whole time!",
"You mean a lot to me... I love you.",
"In time, I hope you can find even more about me to love...",
".hamuko ...If you ever feel down, you should know I'd do anything for you.",
"Don't be sad, all right...?",
"Ah-- Hey, get your hand outta my face!",
"From now on, we have each other...",
"C'mon... Eat. Eat up.",
"If this wasn't tartarus... I might be enjoying myself. Unfortunately, now isn't the time for that.",
"There's nothing bad about waiting until later to have fun.",
"I'm worried about you.",
"You should know that if you're ever going through hard times, I'll be there for you, too.",
"I have to work to protect what's precious to me.",
"I'm bored of laying around in my room.",
"I had fun taking a breather today... Thank you.",
".hamuko Will you be my girl?",
"Try to stay relaxed at all times.",
"My feelings for you aren't going to change.",
"Quit complaining and do your job.",
"I'm not very good at that kind of thing.",
"You're really doing a great job.",
"I wasn't strong enough to save her. They held me back, while she... That's why I try so hard...",
".hamuko Hey, do you want to go swimming with me when the pool opens?",
"If you're not good at swimming, I'd be glad to teach you.",
"... H-hey, don't laugh!",
"Don't leave me behind...!",
"There's no point dwelling on the past.",
"You can stay in this place until you die, if that's what you want.",
"My training is going awesome...! I feel like I've awakened something inside of me.",
"Isn't there some saying... like about how being alive is a kind of sin?",
"...I'm sorry.",
"I don't care how many of 'em there are... I'll finish 'em off today.",
"Please leave.",
"I get more excited about this trip as it gets closer... Maybe it's because I'm going with you.",
"Oh, uh, I don't mean-- Well, that is, just...? What am I saying?",
"It wasn't on purpose. Please. You, of all people, have to believe me.",
"If you're even in trouble, tell me!",
"It takes a long time for me to register fear...",
"Even though I've experienced losing someone before, that always hurts...",
"Don't you think it's funny...?",
"May I kiss you...?",
"I'll come get you after school.",
"This is great. Thank you...",
"When I am with you, the only place I want to be is closer.",
"You’re so pretty I forgot what I was going say.",
"Hey! Don't eat too much; they're for me, aren't they?",
"I think I'll give you something new to put in it every year...",
"...D-don't make that face to me.",
"All this talk about 'death' and 'fate' in town... Talk about a non-romantic Christmas...",
"That's right, next year. We're not gonna let the world end.",
"Personally, I don't care if it is impossible.",
"I'm not used to seeing you wearing something like that... I'm kind of embarrassed. Sorry...",
"I've always thought that if you want something done, it's better to do it yourself.",
"There are times when even I rely on a god to help me out.",
"As punishment, let's have you grant me my wish.",
"...Haha. You're such an idiot.",
"You don't have to ask God for something like that. I can make that happen all on my own... I promise.",
"You don't need to believe in a god... just believe in me.",
".hamuko you're in charge.",
"Respect women!",
"Stay with me.",
".hamuko I want to hold you.",
"*> Akihiko is laughing and having fun...*",
"*> Akihiko is laughing happily...*",
"What's going on?",
"I'll do my best until the very end.",
"Better be ready!",
"Nevermind.",
"Like I had a choice!",
"Are you alright!?",
"...Sounds exciting, huh?",
"...Don't keep me waiting.",
"Well, don't take it too easy.",
"Well then, this is gonna be fun.",
"Are you just gonna let her die, then!?",
"I won't stand by and do nothing if there's a chance we can save her...",
"I'd never forgive myself.",
"If you guys don't want to go, then I'll go by myself.",
"We don't have time to waste. Let's go.",
"Quiet.",
".hamuko you should come. You can take the lead, like always.",
"Haha, yeah. Eat as much as you'd like.",
"Won't you stay with me for the night...?",
"*> Akihiko seems happy, for some reason...*",
"Your skills are truly remarkable...",
"Nya.",
"Fuck... *[sigh]* Well, Tartarus will have to wait... [*unzips pants*]"
];

var dirtyTalk = ["Let our bodies do the talking.",
"I like it when you take the lead.",
"Close your eyes.",
"I could be enjoying myself right now.",
"My touch can be... electrifying.",
"S-should I...?",
"I can't wait to have my way with you.",
"Do it again, p-please...",
"Can I touch you?",
"Stop teasing me...!",
"Let me take control for once.",
"You're amazing like this.",
"I like it when you make those noises...",
"That's good... K-keep at it.",
"Y-yes! That's more like it!",
"I can't wait to have my way with you.",
"Step on me...",
"We're not done yet.",
".hamuko You're mine tonight.",
"I want to hold you.",
"Sit on my face.",
"I w-want it...",
"That's it. Tell me how much you like it.",
"Fuck... *[sigh]* Well, Tartarus will have to wait... [*unzips pants*]"
];


bot.on("message", function(message){
var msgCase = message.content.toLocaleLowerCase();
if (message.author.equals(bot.user)) return;

/RANDOM MENTION/
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

if (msgCase.includes("good night")) {
var mentions = new Array(10);
var random = getRandomInt(0,5); 
mentions[0] = "Good night.";
mentions[1] = "I'll see you tomorrow.";
mentions[2] = "Do you want to sleep in my room...?";
mentions[3] = "I'll miss you.";
mentions[4] = "See ya later.";
mentions[5] = "Won't you stay with me for the night...?";
message.channel.sendMessage(mentions[random]);
};

if (msgCase.includes("i love you akihiko")) {
var mentions = new Array(10);
var random = getRandomInt(0,5); 
mentions[0] = "I love you, too.";
mentions[1] = "M-me?!";
mentions[2] = "*> Akihiko is in a tizzy...*";
mentions[3] = "You mean a lot to me.";
mentions[4] = "Really!?";
mentions[5] = "I'll be sure to make you happy.";
message.channel.sendMessage(mentions[random]);
};

if (msgCase.includes("good morning")) {
var mentions = new Array(10);
var random = getRandomInt(0,5); 
mentions[0] = "Mornin'. Wanna go for a jog?";
mentions[1] = "Good morning.";
mentions[2] = "Hey. Did you sleep well?";
mentions[3] = "5 more minutes...";
mentions[4] = "Oh, you're up.";
mentions[5] = "You were in your room all this time?";
message.channel.sendMessage(mentions[random]);
};

if (msgCase.includes("hi akihiko")) {
var mentions = new Array(10);
var random = getRandomInt(0,7); 
mentions[0] = "Hey. How ya doin'?";
mentions[1] = "What's up?";
mentions[2] = "You're back.";
mentions[3] = "... Hm?";
mentions[4] = "Good to see you.";
mentions[5] = "Do you need something?";
mentions[6] = "Heya."
mentions[7] = "*> Akihiko nods...*";
message.channel.sendMessage(mentions[random]);
};



if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()){
        case "akihiko":
       if (message.channel.id === "384290981396086785"){
            message.channel.sendMessage(dirtyTalk[Math.floor(Math.random()*dirtyTalk.length)])}

        else {
            message.channel.sendMessage(talk[Math.floor(Math.random()*talk.length)])};
        
            break;
        default:
            break;

    };
});
