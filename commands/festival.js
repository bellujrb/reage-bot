const { SlashCommandBuilder } = require('discord.js')

module.exports = { 
    data: new SlashCommandBuilder()
        .setName("festival")
        .setDescription('Horario do Festival!'),

    async execute(interaction){
        await interaction.reply(">>> **HEY SHINOBI** a abertura festival de batalhas ocorre na segunda, terca, quinta e sexta ás 9h e finaliza 12h.")
    }
}