const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENTE_ID, GUILD_ID } = process.env

//import commands
const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandsFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    if ("data" in command && "execute" in command){
        client.commands.set(command.data.name, command)
    } else {
        console.log(`ERROR: Consulte o Desenvolvedor`)
    }
}

client.once(Events.ClientReady, c => {
	console.log(`UFA! Estou logado. ${c.user.tag}`);
});

client.login(TOKEN);