require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
const { Client, GatewayIntentBits, Collection } = require('discord.js')
const { MongoClient, ServerApiVersion } = require('mongodb')

// Create the discord bot client
const client = new Client({ intents : [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]})

// Add the slash commands to the client
client.commands = new Collection()
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for(const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    commands.put(command.data.name, command)
}

// Add the event handlers
const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for(const file of eventFiles) {
    const filePath = path.join(eventsPath, file)
    const event = require(filePath)
    if(event.once) client.once(event.name, (...args) => event.execute(...args))
    else client.on(event.name, (...args) => event.execute(...args))
}

// Create and connect the mongodb client
client.db = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParse : true,
    useUnifiedTopography : true,
    serverApi : ServerApiVersion.v1
})

client.db.connect(async error => {
    if(!error) {

    } else {
        console.error(error)
        client.db = undefined
    }
})

// Login with the discord bot client
client.login(process.env.TOKEN)