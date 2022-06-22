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
        tracks: import("./Meta/Audio.types.js").MusicTrackData;
        registerMusicTracks(data: import("./Meta/Audio.types.js").MusicTrackData): void;
        createMusicNodes(): void;
    };
    registerAudioChannel(channelName: string): void;
    $INIT(): void;
};
