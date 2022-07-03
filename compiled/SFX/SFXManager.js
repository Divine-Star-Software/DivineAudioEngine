import { DAE } from "../DivineAudioEngine.js";
export const SFXMAnager = {
    _sfxCount: 0,
    _sfxPalette: {},
    _sfxMap: {},
    _sfxData: {},
    play(sfxId) {
        const data = this.getSFXData(sfxId);
    },
    stop(sfxId) {
        const data = this.getSFXData(sfxId);
    },
    getSFXData(sfxId) {
        let id = sfxId;
        if (this._sfxMap[sfxId]) {
            id = this._sfxMap[sfxId];
        }
        const data = this._sfxData[id];
        if (!data) {
            throw new Error(`DAE: SFX with ID: ${id} does not exists.`);
        }
        return data;
    },
    registerSFX(sfxData) {
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
