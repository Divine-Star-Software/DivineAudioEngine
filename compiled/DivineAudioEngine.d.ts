export declare const DAE: {
    version: string;
    APIManager: {
        context: AudioContext;
        audioDiv: HTMLDivElement;
        audioElements: Record<string, HTMLAudioElement>;
        audioElementSourceNodes: Record<string, MediaElementAudioSourceNode>;
        $INIT(): void;
        createReverb(): Promise<ConvolverNode>;
        createAudioElementNode(id: string, path: string): Promise<void>;
    };
    music: {
        _musicCount: number;
        _musicPalette: Record<string, number>;
        _musicMap: Record<number, string>;
        _trackData: Record<string, import("./Meta/Audio.types.js").MusicTrackData>;
        play(trackId: string | number): void;
        stop(trackId: string | number): void;
        getTrackData(sfxId: string | number): import("./Meta/Audio.types.js").MusicTrackData;
        registerMusicTracks(data: import("./Meta/Audio.types.js").MusicTrackData[]): void;
        createMusicNodes(): void;
    };
    registerAudioChannel(channelName: string): void;
    $INIT(): void;
};
