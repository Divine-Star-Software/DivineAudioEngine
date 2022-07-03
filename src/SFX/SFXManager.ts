import { DAE } from "../DivineAudioEngine.js";
import { SFXData } from "../Meta/Audio.types";

export const SFXMAnager = {
  _sfxCount: 0,
  _sfxPalette: <Record<string, number>>{},
  _sfxMap: <Record<number, string>>{},
  _sfxData: <Record<string, SFXData>>{},

  play(sfxId: string | number) {
    const data = this.getSFXData(sfxId);
  },

  stop(sfxId: string | number) {
    const data = this.getSFXData(sfxId);
  },

  getSFXData(sfxId: string | number) {
    let id = sfxId;
    if (this._sfxMap[sfxId as number]) {
      id = this._sfxMap[sfxId as number];
    }
    const data = this._sfxData[id];
    if (!data) {
      throw new Error(`DAE: SFX with ID: ${id} does not exists.`);
    }
    return data;
  },

  registerSFX(sfxData: SFXData[]) {
    for (const sfx of sfxData) {
      this._sfxData[sfx.id] = sfx;
      this._sfxPalette[sfx.id] = this._sfxCount;
      this._sfxMap[this._sfxCount] = sfx.id;
      this._sfxCount++;
    }
  },

  createSFXNodes() {
    for (const sfxKey of Object.keys(this._sfxData)) {
      const sfx = this._sfxData[sfxKey];
      DAE.APIManager.createAudioElementNode(sfx.id, sfx.path);
    }
  },
};
