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
export declare type BiquadFilterNodeData = {
    type: BiquadFilterType;
    frequency: number;
    Q?: number;
    detune?: number;
};
export declare type DynamicCompressorData = {
    threshold?: number;
    knee?: number;
    ratio?: number;
    attack?: number;
    release?: number;
};
