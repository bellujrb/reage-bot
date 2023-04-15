const { SlashCommandBuilder } = require('discord.js')

module.exports = { 
    data: new SlashCommandBuilder()
        .setName("saude")
        .setDescription('Horario da Coleta!'),

    async execute(interaction){
        await interaction.reply(">>> **HEY SHINOBI** os horarios de coleta de saude ocorre ás 21h/3h/9h.")
    }
}