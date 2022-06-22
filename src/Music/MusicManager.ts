import { MusicTrackData } from "Meta/Audio.types";
import { DAE } from "../DivineAudioEngine.js";
export const MusicManager = {
  tracks: <MusicTrackData>[],
  registerMusicTracks(data: MusicTrackData) {
    this.tracks = data;
  },

  createMusicNodes() {
    for (const track of this.tracks) {
      DAE.APIManager.createAudioElementNode(track.id, track.path);
    }
  },
};
