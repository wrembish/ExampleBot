// Constant to store the character that all commands will start with
const COMMANDCHAR = '%%'

module.exports = {
    name : 'messageCreate',
    async execute(message) {
        // Don't let the bot respond to itself
        if(message.author.id === message.client.user.id) return

        // Constant to shorten writing out message.content
        const content = message.content

        // Classic ping command as a message command
        if(content === COMMANDCHAR+'ping') await message.channel.send('Pong!')
        // Command for quick testing
        else if(content === COMMANDCHAR+'test') {
            // Do something
        }
    }
}