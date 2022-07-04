import { BiquadFilterNodeData, DynamicCompressorData, PannerNodeData } from "../Meta/API.types";
import { MusicTrackNodes } from "../Meta/Audio.types";
export declare const APIManager: {
    context: AudioContext;
    master: GainNode;
    pannerNodeDefaults: Partial<PannerNodeData>;
    $INIT(): void;
    connectToMaster(node: AudioNode): void;
    createAudioBufferSource(buffer: AudioBuffer): AudioBufferSourceNode;
    createDynamicCompressor(data: DynamicCompressorData): void;
    createWaveShapeNode(curve: Float32Array, oversample?: OverSampleType | undefined): void;
    createGain(value?: number): GainNode;
    createDelayNode(delayTime: number): DelayNode;
    createBiQuadFilterNode(data: BiquadFilterNodeData): BiquadFilterNode;
    createConvolver(buffer: AudioBuffer): ConvolverNode;
    createPannerNode(nodeData: Partial<PannerNodeData>): PannerNode;
    getAudioBuffer(path: string): Promise<AudioBuffer>;
    createAudioElementNode(path: string): Promise<MusicTrackNodes>;
};
