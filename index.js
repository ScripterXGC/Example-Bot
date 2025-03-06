// This is the ultimate and updated bot example, for music and all types.
const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const { ForgeCanvas } = require("@tryforge/forge.canvas");
const { ForgeLink } = require("@tryforge/forge.link");
// Token Init
const dotenv = require("dotenv"); // Loads the .env file
dotenv.config(); // Config
// Initializing ForgeLink
// ↓↓ This is all optional.
const lavalink = new ForgeLink({
    events: {
        kazagumo: ["playerStart", "playerEnd", "playerUpdate", "queueUpdate"], // Basic Kazagumo Events
        shoukaku: ["debug", "ready"] // Basic Shoukaku Events
    },
    kazagumoOptions: {
        defaultSearchEngine: "youtube" // Default Engine
    },
   nodes: [
		{
		  "name": "Replace with your lavalink server.", // Name
		  "auth": "Basically Password", // Password? Auth?
		  "url": "yoururl:yourport", // URL & PORT
		  "secure": true // Whether you use an SSL server.
		}
    ]
}); 
// ↑↑ This is all optional.
// Initializing ForgeScript & Extensions
const client = new ForgeClient({
    intents: [
    "Guilds",
        "GuildMessages",
        "MessageContent",
        "GuildVoiceStates",
        "GuildInvites",
        "GuildMembers" // Basic Intents
    ],
    "useInviteSystem": true, // Use this if you want to use invite system.
    events: [
        "messageCreate",
        "channelCreate",
    "channelDelete",
    "channelUpdate",
    "debug",
    "emojiCreate",
    "emojiDelete",
    "emojiUpdate",
    "guildAuditLogEntryCreate",
    "guildCreate",
    "guildDelete",
    "guildMemberAdd",
    "guildMemberRemove",
    "guildMemberUpdate",
    "guildUpdate",
    "interactionCreate",
    "inviteCreate",
    "inviteDelete",
    "messageDelete",
    "messageReactionAdd",
    "messageReactionRemove",
    "messageUpdate",
    "ready",
    "roleCreate",
    "roleDelete",
    "roleUpdate",
    "shardDisconnect",
    "shardError",
    "shardReady",
    "shardReconnecting",
    "shardResume",
    "userUpdate",
    "voiceStateUpdate" // Almost All Events
    ],
    extensions: [
		lavalink, // Lavalink
		new ForgeDB(), // Adds database
		new ForgeCanvas() // Extensions (You can change them) // Canvas
	],
	token: process.env.BOT_TOKEN,
    prefixes: ["r+"] // You can change it,
    trackers: { invites: true } // Enables tracker invites
});
// Commands Init
client.commands.load("./commands");
// Application Commands Init
client.applicationCommands.load("./slashes");
// Client Init
client.login();