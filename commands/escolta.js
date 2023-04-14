const { SlashCommandsBuilder } = require('discord.js')

module.exports = { 
    data: new SlashCommandsBuilder()
        .setName("escolta")
        .setDescription('Horario da Escolta!'),

    async execute(interaction){
        await interaction.reply(`HEY SHINOBI ${c.user.tag} 
        a abertura da escolta acontece ás 1h/2h e também ocorre as 
        7h/8h.`)
    }
}