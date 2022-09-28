const { Client,  Intents } = require("discord.js");

var siarNotlar = [];
var baranNotlar = [];
var ciwanNotlar = [];
var bahatNotlar = [];

function showList(array){
    if(!array.isArray()){
        message.reply("array gir!");
    }else{
        for(let i=0; i<array.length; i++){
            let line = i+1;
            message.reply(line+ "." +array[i]);
        }
    }
}

const client = new Client({
    intents: ["DIRECT_MESSAGES", "GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    presence: {
        status: "online",
        activities: [{
            name: "Arabalar 1",
            type: "WATCHING"
        }]
    },
});

client.on('ready', () => { 
    console.log(`Launched as a bot: ${client.user.tag}!`);
});

client.on('messageCreate', message => {
	if (message.author.id === process.env.USER_ID) {
		message.reply(process.env.MESSAGE);
        //message.channel.send("content")
	}
});

client.on('messageCreate', message => {
	if (message.author.id === process.env.SIAR_ID) {
        var command = message.content.split(" ");
        var commandRequest = commandRequest[0];
        if(command == "//add"){

            let note = "";
            for(let i=1; i<command.length; i++){
                note.concat(command[i]);
            }
            siarNotlar.push(note);

            message.reply("Şiar'ın notlarına eklendi");

            showList(siarNotlar);
        }else if(command == "//remove"){

            let removedIndex = command[1]+1;
            if(typeof command[1] !== 'number' && !Number.isNaN(command[1])){
                message.reply("ne");
            }else{
                siarNotlar.splice(removedIndex, 1);

                message.reply("Şiar'ın notlarindan silindi.");
                showList(siarNotlar);
            }
        }
        else if(command == "//show"){

            showList(siarNotlar);
        }
        //message.channel.send("content")
	}
});

client.login(process.env.DJS_TOKEN);