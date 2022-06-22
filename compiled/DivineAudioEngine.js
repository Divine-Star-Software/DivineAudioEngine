import { APIManager } from "./API/APIManager.js";
import { MusicManager } from "./Music/MusicManager.js";
export const DAE = {
    version: "0.0.0",
    APIManager: APIManager,
    music: MusicManager,
    registerAudioChannel(channelName) { },
    $INIT() {
        DAE.APIManager.$INIT();
        DAE.music.createMusicNodes();
    },
};
