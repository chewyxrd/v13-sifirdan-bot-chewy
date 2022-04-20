const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILDS_MEMBERS,
        Intents.FLAGS.GUILDS
    ]
});

const chewy = require("./chewy.json"); //AYARLAR.JSON OLABİLİR VEYA İSMİNİZ.JSON
const db = require("orio.db"); // QUİCK.DB KULLANANLAR quick.db YAZABİLİR

client.on('ready', () => {
    console.log(`Bot ${client.user.tag} ismi ile giriş yaptı!`);
});

client.login(chewy.token);

////////////////////////////// SA - AS //////////////////////////////

client.on("messageCreate", message => {

    if(message.content.toLowerCase() === "selam") {
        return message.channel.send("Aleyküm selam dostum, hoş geldin :tada:")
    };
});

////////////////////////////// SA - AS END //////////////////////////////