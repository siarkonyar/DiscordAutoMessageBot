const { Client, Intents } = require("discord.js");

var siarNotlar = [];
var baranNotlar = [];
var ciwanNotlar = [];
var bahatNotlar = [];

function showList(array) {
    if (!array.isArray()) {
        message.reply("array gir!");
    } else {
        for (let i = 0; i < array.length; i++) {
        let line = i + 1;
        message.reply(line + ". " + array[i]);
        }
    }
}

function commands(array) {
    var command = message.content.split(" ");
    var commandRequest = command[0];
    if (commandRequest == "//add") {
        let note = "";
        for (let i = 1; i < command.length; i++) {
            note.concat(command[i]);
        }
        array.push(note);

        message.reply("notlara eklendi");

        showList(array);
    } else if (commandRequest == "//remove") {
        let removedIndex = command[1] - 1;
        if (typeof command[1] !== "number" && !Number.isNaN(command[1])) {
            message.reply("ne");
        } else {
            array.splice(removedIndex, 1);

            message.reply("notlardan silindi.");
            showList(array);
        }
    } else if (commandRequest == "//show") {
        showList(array);
    }
    //message.channel.send("content")
}

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

client.on("messageCreate", (message) => {
    if (message.author.id === process.env.SIAR_ID) {
        commands(siarNotlar);
    }else if(message.author.id === process.env.BAHAT_ID){
        commands(bahatNotlar);
    }else if(message.author.id === process.env.BARAN_ID){
        commands(baranNotlar);
    }else if(message.author.id === process.env.CIWAN_ID){
        commands(ciwanNotlar);
    }
});

client.on("messageCreate", (message) => {
    if (message.author.id === process.env.SIAR_ID) {
    }
});

client.login(process.env.DJS_TOKEN);
