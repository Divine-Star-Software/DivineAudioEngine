import { DAE } from "../DivineAudioEngine.js";
export const MusicManager = {
    _musicCount: 0,
    _musicPalette: {},
    _musicMap: {},
    _trackData: {},
    _trackNodes: {},
    musicChannels: {},
    play(trackId) {
        const data = this.getTrackData(trackId);
    },
    stop(trackId) {
        const data = this.getTrackData(trackId);
    },
    getTrackData(sfxId) {
        let id = sfxId;
        if (this._musicMap[sfxId]) {
            id = this._musicMap[sfxId];
        }
        const data = this._trackData[id];
        if (!data) {
            throw new Error(`DAE: Music Track with ID: ${id} does not exists.`);
        }
        return data;
    },
    registerMusicTracks(data) {
        for (const track of data) {
            this._trackData[track.id] = track;
        }
    },
    async createMusicNodes() {
        for (const trackID of Object.keys(this._trackData)) {
            const track = this._trackData[trackID];
            const node = await DAE.APIManager.createAudioElementNode(track.path);
            this._trackNodes[track.id] = node;
        }
    },
};
