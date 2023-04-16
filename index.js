const { Client, Events, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js');

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env

const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    if ("data" in command && "execute" in command){
        client.commands.set(command.data.name, command)
    } else {
        console.log(`ERROR: Consulte o Desenvolvedor`)
    }
}

client.on('guildMemberAdd', async (member) => {
    let guild = client.guilds.get("1089579663136915527");
    let channel = client.channels.get("1089587490802892880");

    if (guild != member.guild){
        return console.log("Sai daqui! Sem Permissao.")
    } else {
        const embed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Reação Chuvosa')
                .setURL('https://discord.gg/eUAcaqGBbu')
                .setAuthor(
                    { 
                    name: 'Reação Chuvosa', 
                    iconURL: 'https://i.pinimg.com/564x/b3/a7/65/b3a765edbf6b0d451f26a6650e574401.jpg', 
                    url: 'https://discord.gg/eUAcaqGBbu' 
                    })
                .setDescription('Comunidade de Naruto OL Mobile')
                .setThumbnail('https://i.pinimg.com/564x/b3/a7/65/b3a765edbf6b0d451f26a6650e574401.jpg')
                .addFields(
                    { 
                        name: 'Naruto OL Mobile Brasil', 
                        value: 'Parceiro Oficial'
                    },
                )
                .setImage('https://i.pinimg.com/564x/b3/a7/65/b3a765edbf6b0d451f26a6650e574401.jpg')
                .setTimestamp()
                .setFooter(
                    { 
                        text: 'Reação Chuvosa', 
                        iconURL: 'https://i.pinimg.com/564x/b3/a7/65/b3a765edbf6b0d451f26a6650e574401.jpg' 
                    }
                );

                await channel.send(embed);
            }
})

client.once(Events.ClientReady, c => {
	console.log(`UFA! Estou logado. ${c.user.tag}`);
});
client.login(TOKEN);

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("COMANDO NULL: Consulte um Desenvolvedor")
        return 
    }
    try {
        await command.execute(interaction)
    } 
    catch(error) {
        console.error(error)
        await interaction.reply("Houve um erro ao executar")
    }
})