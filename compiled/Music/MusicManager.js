import { DAE } from "../DivineAudioEngine.js";
export const MusicManager = {
    _musicCount: 0,
    _musicPalette: {},
    _musicMap: {},
    _trackData: {},
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
    createMusicNodes() {
        for (const trackID of Object.keys(this._trackData)) {
            const track = this._trackData[trackID];
            DAE.APIManager.createAudioElementNode(track.id, track.path);
        }
    },
};
