import { EffectData } from "./Effects.types";
export declare type MusicTrackData = {
    id: string;
    path: string;
    channel: "main" | string;
    loop: boolean;
};
export declare type SFXData = {
    id: string;
    path: string;
    channel: "sfx" | string;
    varations?: SFXPlayOptions[];
    is3dSound?: boolean;
    _3dSoundData?: Partial<PannerNodeData>;
};
export declare type MusicTrackNodes = {
    audio: MediaElementAudioSourceNode;
    master: GainNode;
    effects: Record<string, EffectNodes>;
};
export declare type SFXNodes = {
    buffer: AudioBuffer;
};
export declare type SFXPlayOptions = {
    startTime?: number;
    level?: number;
    dryLevel?: number;
    playBackRate?: number;
    _3dSoundData?: Partial<PannerNodeData>;
    _3dSoundPosition?: {
        x: number;
        y: number;
        z: number;
    };
    effects?: EffectData;
};
export declare type EffectTypes = "reverb" | "delay" | "filter";
export declare type EffectNodes = {
    type: EffectTypes;
    master: GainNode;
    reverb?: ConvolverNode;
    delay?: DelayNode;
};
export declare type PannerNodeData = {
    panningModel?: "equalpower" | "HRTF";
    distanceModel?: "linear" | "inverse" | "exponential";
    positionX: number;
    positionY: number;
    positionZ: number;
    orientationX?: number;
    orientationY?: number;
    orientationZ?: number;
    refDistance?: number;
    maxDistance?: number;
    rolloffFactor?: number;
    coneInnerAngle?: number;
    coneOuterAngle?: number;
    coneOuterGain?: number;
};
