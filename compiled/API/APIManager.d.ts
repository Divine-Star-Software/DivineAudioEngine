import { MusicTrackNodes, PannerNodeData } from "../Meta/Audio.types";
export declare const APIManager: {
    context: AudioContext;
    master: GainNode;
    pannerNodeDefaults: Partial<PannerNodeData>;
    $INIT(): void;
    connectToMaster(node: AudioNode): void;
    createAudioBufferSource(buffer: AudioBuffer): AudioBufferSourceNode;
    createGain(): GainNode;
    createConvolver(buffer: AudioBuffer): ConvolverNode;
    createPannerNode(nodeData: Partial<PannerNodeData>): PannerNode;
    getAudioBuffer(path: string): Promise<AudioBuffer>;
    createAudioElementNode(path: string): Promise<MusicTrackNodes>;
};
