import { DAE } from "../DivineAudioEngine.js";
export const SFXMAnager = {
    _sfxPlayIdCount: 0,
    _playingSFX: {},
    _sfxCount: 0,
    _sfxPalette: {},
    _sfxMap: {},
    _sfxData: {},
    _sfxNodes: {},
    _sfxChannels: {},
    _getPanner(data, options) {
        if (data.is3dSound) {
            let pannerData = data._3dSoundData;
            if (!data._3dSoundData && options?._3dSoundData) {
                pannerData = options._3dSoundData;
            }
            if (!options?._3dSoundPosition) {
                throw new Error(`Must provide a postion to play a 3d sound.`);
            }
            if (!pannerData) {
                pannerData = {
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                };
            }
            pannerData.positionX = options._3dSoundPosition.x;
            pannerData.positionY = options._3dSoundPosition.y;
            pannerData.positionZ = options._3dSoundPosition.z;
            return DAE.APIManager.createPannerNode(pannerData);
        }
        return false;
    },
    play(sfxId, options) {
        const data = this.getSFXData(sfxId);
        const node = this.getSFXNode(sfxId);
        const source = DAE.APIManager.createAudioBufferSource(node.buffer);
        let finalNode = source;
        if (data.is3dSound) {
            const panner = this._getPanner(data, options);
            if (panner) {
                finalNode.connect(panner);
                finalNode = panner;
            }
        }
        const mastGain = DAE.APIManager.createGain();
        finalNode.connect(mastGain);
        DAE.APIManager.connectToMaster(mastGain);
        mastGain.gain.value = 1;
        source.start(0);
        if (!this._playingSFX[data.id]) {
            this._playingSFX[data.id] = {};
        }
        const playId = String(this._sfxPlayIdCount);
        this._playingSFX[data.id][playId] = source;
        const self = this;
        source.onended = function () {
            mastGain.disconnect();
            source.disconnect();
            //@ts-ignore
            self._playingSFX[data.id][playId] = undefined;
        };
        this._sfxPlayIdCount++;
        return playId;
    },
    /**# Stop Specific
     * ---
     * Use the id returned from `play` to stop a specific instance of a sound.
     */
    stopSpecific(sfxId, id) {
        const data = this.getSFXData(sfxId);
        if (!this._playingSFX[data.id])
            return false;
        if (!this._playingSFX[data.id][id])
            return false;
        this._playingSFX[data.id][id].stop();
        //@ts-ignore
        this._playingSFX[data.id][id] = undefined;
    },
    stopAll(sfxId) {
        const data = this.getSFXData(sfxId);
        if (!this._playingSFX[data.id])
            return false;
        const keys = Object.keys(this._playingSFX[data.id]);
        if (keys.length == 0)
            return false;
        for (const key of keys) {
            this._playingSFX[data.id][key].stop();
            //@ts-ignore
            this._playingSFX[data.id][key] = undefined;
        }
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
    getSFXNode(sfxId) {
        const data = this.getSFXData(sfxId);
        const node = this._sfxNodes[data.id];
        if (!node) {
            throw new Error(`DAE: SFX with ID: ${data.id} does audio nodes are not created.`);
        }
        return node;
    },
    registerSFX(sfxData) {
        for (const sfx of sfxData) {
            this._sfxData[sfx.id] = sfx;
            this._sfxPalette[sfx.id] = this._sfxCount;
            this._sfxMap[this._sfxCount] = sfx.id;
            this._sfxCount++;
        }
    },
    registerSFXChannel() { },
    createChannels() { },
    async createSFXNodes() {
        for (const sfxKey of Object.keys(this._sfxData)) {
            const sfx = this._sfxData[sfxKey];
            const buffer = await DAE.APIManager.getAudioBuffer(sfx.path);
            this._sfxNodes[sfx.id] = {
                buffer: buffer,
            };
        }
    },
};