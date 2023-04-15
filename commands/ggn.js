const { SlashCommandBuilder } = require('discord.js')

module.exports = { 
    data: new SlashCommandBuilder()
        .setName("ggn")
        .setDescription('Horario da GGN!'),

    async execute(interaction){
        await interaction.reply(">>> **HEY SHINOBI** a abertura da grande guerra ninja acontece na quarta e sabado ás 9h.")
        await interaction.followUp({ content: 'Não esqueça!!', ephemeral: true });
    }
}