require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
const { REST } = require('discord.js')
const { Routes } = require('discord-api-types/v10')

// Create an array of commands to deploy
const commands = []
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for(const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    commands.push(command.data.toJSON())
}

// Create a new REST
const rest = new REST({ version : '10' }).setToken(process.env.TOKEN)

// deploy the commands as application commands
// **NOTE** these can take up to an hour to show in your bot
rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body : commands })
    .then(() => console.log('Successfully registered application commands!'))
    .catch(error => console.error('Error: ', error))