const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = { 
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription("Comando de Embed"),

        async execute(interaction) {
            const embed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Reação Chuvosa')
                .setURL('https://discord.gg/eUAcaqGBbu')
                .setAuthor({ name: 'Reação Chuvosa', iconURL: 'https://i.pinimg.com/564x/b3/a7/65/b3a765edbf6b0d451f26a6650e574401.jpg', url: 'https://discord.gg/eUAcaqGBbu' })
                .setDescription('Comunidade de Naruto OL Mobile')
                .setThumbnail('https://i.pinimg.com/564x/b3/a7/65/b3a765edbf6b0d451f26a6650e574401.jpg')
                .addFields(
                    { name: 'Naruto OL Mobile Brasil', value: 'Parceiro Oficial'},
                )
                .setImage('https://i.pinimg.com/564x/b3/a7/65/b3a765edbf6b0d451f26a6650e574401.jpg')
                .setTimestamp()
                .setFooter({ text: 'Reação Chuvosa', iconURL: 'https://i.pinimg.com/564x/b3/a7/65/b3a765edbf6b0d451f26a6650e574401.jpg' });

                await interaction.reply({
                    embeds: [embed]
                });
        }
}