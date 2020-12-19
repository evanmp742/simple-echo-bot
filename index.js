const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
    if (msg.content === 'aa') {
        msg.channel.send('aaaaaaaaa')
    }
})

client.login('put token ha')