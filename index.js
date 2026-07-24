const {token} = require("../Security/Weather App/config.json"); //This is for the purposes of keeping the token for the discord bot
const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages]});

client.login(token);

