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
            const request = axios.put(`https://discord.com/api/v10/channels/${voiceChannelId}/voice-status`,
                { status: status.length > 0 ? `${status}` : null }, { headers: { Authorization: `Bot ${this.botClient.token}` } }
            )
        } catch (error) {
            throw Error(`An error just ocurred: ${error}`)
        }
    }
}

module.exports = { DiscordVCStatus }