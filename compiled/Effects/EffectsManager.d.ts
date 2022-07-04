import { BuiltInReverbList, EffectData } from "../Meta/Effects.types";
export declare const EffectsManager: {
    builtInReverbBuffers: Record<string, AudioBuffer>;
    customReverbBuffers: Record<string, AudioBuffer>;
    preloadReverbBuffers(builtInReverbs: BuiltInReverbList[], customReverbs?: string[] | undefined): Promise<void>;
    _getReverbBuffer(effectsData: EffectData): AudioBuffer | undefined;
    getEffectsNode(effectsData: EffectData, source: AudioNode, master: GainNode): void;
};
