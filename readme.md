# discord-vc-status

* A little library that makes your selected Voice Channel get a custom status!

# How to install it:

```cmd
npm i discord-vc-status
```

# How to use it:

```js
// in your index.js or whatever you declared client
const { DiscordVCStatus } = require("discord-vc-status")
const { Client } = require("discord.js")

// Define your client..
const client = new Client({ Intents: [INTENTS_HERE] })

// Declare the library as a client's attribute
client.vcStatus = new DiscordVCStatus(client);

// in your command if you want
// Put any status message.
let status = "I love the mices 🐁"

// Invoke it.
await client.vcStatus.setVoiceStatus("<voice-channel-id-here>", status)
```