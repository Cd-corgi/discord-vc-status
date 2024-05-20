const axios = require('axios')

class DiscordVCStatus {
    /**
     * @param {String} botToken The Bot's token to make the fetch to the Discord API
     */
    constructor(botToken) {
        this.botToken = botToken;
    }

    /**
     * @param {String} voiceChannelId The Voice Channel Id to set the status.
     * @param {String} status The status you want to set...
     * @returns The voice channel will be set the custom status
     */
    async setVoiceStatus(voiceChannelId, status) {
        try {
            if (status.length < 1 || !status) throw Error("The status should be had a text...")

            const request = await axios.put(`https://discord.com/api/v10/channels/${voiceChannelId}/voice-status`,
                { status: `${status}` }, { headers: { Authorization: `Bot ${this.botToken}` } }
            )
        } catch (error) {
            throw Error(`An error just ocurred: ${error}`)
        }
    }
}

module.exports = { DiscordVCStatus }