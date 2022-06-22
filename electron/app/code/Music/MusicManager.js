import { DAE } from "../DivineAudioEngine.js";
export const MusicManager = {
    tracks: [],
    registerMusicTracks(data) {
        this.tracks = data;
    },
    createMusicNodes() {
        for (const track of this.tracks) {
            DAE.APIManager.createAudioElementNode(track.id, track.path);
        }
    },
};
