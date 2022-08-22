const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data : new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),

    async execute(interaction) {
        // Reply to the slash command with the message 'Pong!'
        interaction.reply('Pong!')
    }
}