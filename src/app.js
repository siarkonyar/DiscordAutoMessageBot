const { Client, Intents } = require("discord.js");

var siarNotlar = [];
var baranNotlar = [];
var ciwanNotlar = [];
var bahatNotlar = [];

const client = new Client({
    intents: ["DIRECT_MESSAGES", "GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    presence: {
        status: "online",
        activities: [
        {
            name: "Arabalar 1",
            type: "WATCHING",
        },
        ],
    },
});

client.on("ready", () => {
    console.log(`Launched as a bot: ${client.user.tag}!`);
});

/* function showList(array, message) {
    if (!array.isArray()) {
        message.reply('array gir!');
    } else {
        for (let i = 0; i < array.length; i++) {
        let line = i + 1;
        message.reply(line + '. ' + array[i]);
        }
    }
}

function commands(array, message) {
    let command = message.content.trim().split(' ');
    let commandRequest = command[0];
    if (commandRequest === '//add') {
        let note = '';
        for (let i = 1; i < command.length; i++) {
            note.concat(command[i]);
        }
        array.push(note);

        message.reply('notlara eklendi');

        showList(array, message);
    } else if (commandRequest === '//remove') {
        let removedIndex = command[1] - 1;
        if (typeof command[1] !== 'number') {
            message.reply('ne');
        } else {
            array.splice(removedIndex, 1);

            message.reply('notlardan silindi.');
            showList(array, message);
        }
    } else if (commandRequest === '//show') {
        showList(array, message);
    }
    //message.channel.send("content")
} */

client.on("messageCreate", (message) => {
        if (message.author.id === process.env.SIAR_ID) {

            let command = message.content.trim().split(' ');
            let commandRequest = command[0];
            if (commandRequest === '//add') {
                let note = '';
                for (let i = 1; i < command.length; i++) {
                    note = note + ' ' + command[i];
                }
                siarNotlar.push(note);

                message.channel.send('notlara eklendi');

                for (let i = 0; i < siarNotlar.length; i++) {
                    let line = i + 1;
                    message.channel.send(line + '. ' + siarNotlar[i]);
                }

            } else if (commandRequest === '//remove') {
                let removedIndex = command[1] - 1;
                if (typeof command[1] !== 'number') {
                    message.channel.send('ne');
                } else {
                    siarNotlar.splice(removedIndex, 1);

                    message.channel.send('notlardan silindi.');

                    for (let i = 0; i < siarNotlar.length; i++) {
                        let line = i + 1;
                        message.channel.send(line + '. ' + siarNotlar[i]);
                    }
                }
            } else if (commandRequest === '//show') {
                for (let i = 0; i < siarNotlar.length; i++) {
                    let line = i + 1;
                    message.channel.send(line + '. ' + siarNotlar[i]);
                }
            }
        }
        /* commands(siarNotlar, message);
    }else if(message.author.id === process.env.BAHAT_ID){
        commands(bahatNotlar, message);
    }else if(message.author.id === process.env.BARAN_ID){
        commands(baranNotlar, message);
    }else if(message.author.id === process.env.CIWAN_ID){
        commands(ciwanNotlar, message);
    } */
});

client.login(process.env.DJS_TOKEN);
