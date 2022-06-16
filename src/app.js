const { Client,  Intents } = require("discord.js");

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

client.login(process.env.DJS_TOKEN);