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

client.vcStatus = new DiscordVCStatus("<your-bot-token-here>");

// in your command if you want

let status = "I love the mices 🐁"

await client.vcStatus.setVoiceStatus("<voice-channel-id-here>", status)
```