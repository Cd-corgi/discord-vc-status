const axios = require('axios')

class DiscordVCStatus {
    /**
     * @param {Client} botClient The Client of the bot
     */
    constructor(botClient) {
        this.botClient = botClient;
    }

    /**
     * @param {String} voiceChannelId The Voice Channel Id to set the status.
     * @param {String} status The status you want to set...
     * @returns The voice channel will be set the custom status
     */
    async setVoiceStatus(voiceChannelId, status) {
        try {
            if (status.length < 1 || !status) status = null

            const request = await axios.put(`https://discord.com/api/v10/channels/${voiceChannelId}/voice-status`,
                { status }, { headers: { Authorization: `Bot ${this.botClient.token}` } }
            )
        } catch (error) {
            throw Error(`An error just ocurred: ${error}`)
        }
    }
}

module.exports = { DiscordVCStatus }