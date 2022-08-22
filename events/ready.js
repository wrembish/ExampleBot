module.exports = {
    name : 'ready',
    once : true,
    execute(client) {
        // Alert the console that the bot is logged in and ready to go
        console.log(`Ready! Logged in as ${client.user.tag}!`)
    }
}