const { SlashCommandBuilder } = require('discord.js')

module.exports = { 
    data: new SlashCommandBuilder()
        .setName("fg")
        .setDescription('Horario da FG!'),

    async execute(interaction){
        await interaction.reply(">>> **HEY SHINOBI** a abertura da fg ocorre ás 1h/3h e tambem ás 7h/10h.")
    }
}