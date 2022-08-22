module.exports = {
    name : 'interactionCreate',
    async execute(interaction) {
        // Ignore any interactions that aren't commands
        if(!interaction.isCommand()) return

        // Get the command source code from the commands Collection that was created on the client
        const command = interaction.client.commands.get(interaction.commandName)

        // If that command existed, try to execute it and catch any errors that may get thrown
        if(command) {
            try {
                await command.execute(interaction)
            } catch(error) {
                console.error('Error: ', error)
                await interaction.reply({ content : 'There was an error while executing this command!', ephemeral : true })
            }
        }
    }
}