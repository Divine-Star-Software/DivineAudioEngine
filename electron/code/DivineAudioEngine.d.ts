export declare const DAE: {
    version: string;
    api: {
        context: AudioContext;
        master: GainNode;
        pannerNodeDefaults: Partial<import("./Meta/API.types.js").PannerNodeData>;
        $INIT(): void;
        connectToMaster(node: AudioNode): void;
        createAudioBufferSource(buffer: AudioBuffer): AudioBufferSourceNode;
        createDynamicCompressor(data: import("./Meta/API.types.js").DynamicCompressorData): void;
        createWaveShapeNode(curve: Float32Array, oversample?: OverSampleType | undefined): void;
        createGain(value?: number): GainNode;
        createDelayNode(delayTime: number): DelayNode;
        createBiQuadFilterNode(data: import("./Meta/API.types.js").BiquadFilterNodeData): BiquadFilterNode;
        createConvolver(buffer: AudioBuffer): ConvolverNode;
        createPannerNode(nodeData: Partial<import("./Meta/API.types.js").PannerNodeData>): PannerNode;
        getAudioBuffer(path: string): Promise<AudioBuffer>;
        createAudioElementNode(path: string): Promise<import("./Meta/Audio.types.js").MusicTrackNodes>;
    };
    music: {
        _musicCount: number;
        _musicPalette: Record<string, number>;
        _musicMap: Record<number, string>;
        _trackData: Record<string, import("./Meta/Audio.types.js").MusicTrackData>;
        _trackNodes: Record<string, import("./Meta/Audio.types.js").MusicTrackNodes>;
        musicChannels: Record<string, GainNode>;
        play(trackId: string | number): void;
        stop(trackId: string | number): void;
        getTrackData(sfxId: string | number): import("./Meta/Audio.types.js").MusicTrackData;
        registerMusicTracks(data: import("./Meta/Audio.types.js").MusicTrackData[]): void;
        createMusicNodes(): Promise<void>;
    };
    sfx: {
        _sfxPlayIdCount: number;
        _playingSFX: Record<string, Record<string, AudioBufferSourceNode>>;
        _sfxCount: number;
        _sfxPalette: Record<string, number>;
        _sfxMap: Record<number, string>;
        _sfxData: Record<string, import("./Meta/Audio.types.js").SFXData>;
        _sfxNodes: Record<string, import("./Meta/Audio.types.js").SFXNodes>;
        _sfxChannels: Record<string, GainNode>;
        _getPanner(data: import("./Meta/Audio.types.js").SFXData, options?: import("./Meta/Audio.types.js").SFXPlayOptions | undefined): false | PannerNode;
        _getOptions(data: import("./Meta/Audio.types.js").SFXData): import("./Meta/Audio.types.js").SFXPlayOptions | undefined;
        play(sfxId: string | number, options?: import("./Meta/Audio.types.js").SFXPlayOptions | undefined): string;
        stopSpecific(sfxId: string | number, id: string): false | undefined;
        stopAll(sfxId: string | number): false | undefined;
        getSFXData(sfxId: string | number): import("./Meta/Audio.types.js").SFXData;
        getSFXNode(sfxId: string | number): import("./Meta/Audio.types.js").SFXNodes;
        registerSFX(sfxData: import("./Meta/Audio.types.js").SFXData[]): void;
        registerSFXChannel(): void;
        createChannels(): void;
        createSFXNodes(): Promise<void>;
    };
    space: {
        model: "equalpower" | "HRTF";
        setListenerPosition(x: number, y: number, z: number): void;
        setListenerDirection(x: number, y: number, z: number): void;
    };
    effects: {
        builtInReverbBuffers: Record<string, AudioBuffer>;
        customReverbBuffers: Record<string, AudioBuffer>;
        preloadReverbBuffers(builtInReverbs: import("./Meta/Effects.types.js").BuiltInReverbList[], customReverbs?: string[] | undefined): Promise<void>;
        _getReverbBuffer(effectsData: import("./Meta/Effects.types.js").EffectData): AudioBuffer | undefined;
        getEffectsNode(effectsData: import("./Meta/Effects.types.js").EffectData, source: AudioNode, master: GainNode): void;
    };
    constants: {
        effectsBaesPath: string;
        customEffectsBaesPath: string;
        setEffectsBaePath(path: string): void;
        setCustomEffectsBaePath(path: string): void;
        getBuiltInReverbPath(id: string): string;
        getCustomReverbPath(id: string): string;
    };
    $INIT(): Promise<void>;
};
export declare type DivineAudioEngine = typeof DAE;
