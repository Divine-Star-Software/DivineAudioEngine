export declare const APIManager: {
    context: AudioContext;
    audioDiv: HTMLDivElement;
    audioElements: Record<string, HTMLAudioElement>;
    audioElementSourceNodes: Record<string, MediaElementAudioSourceNode>;
    $INIT(): void;
    createReverb(): Promise<ConvolverNode>;
    createAudioElementNode(id: string, path: string): Promise<void>;
};
