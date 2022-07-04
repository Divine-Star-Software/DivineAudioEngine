import { APIManager } from "./API/APIManager.js";
import { EffectsManager } from "./Effects/EffectsManager.js";
import { MusicManager } from "./Music/MusicManager.js";
import { SFXMAnager } from "./SFX/SFXManager.js";
import { SoundSpaceManager } from "./SoundSpace/SoundSpaceManager.js";

export const DAE = {
  version: "0.0.0",
  APIManager: APIManager,
  music: MusicManager,
  sfx: SFXMAnager,
  space : SoundSpaceManager,
  effects : EffectsManager,

  async $INIT() {
    DAE.APIManager.$INIT();
    DAE.sfx.createChannels();
    await DAE.music.createMusicNodes();
    await DAE.sfx.createSFXNodes();
  },
};



export type DivineAudioEngine = typeof DAE;