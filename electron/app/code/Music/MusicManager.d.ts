import { MusicTrackNodes, MusicTrackData } from "Meta/Audio.types";
export declare const MusicManager: {
    _musicCount: number;
    _musicPalette: Record<string, number>;
    _musicMap: Record<number, string>;
    _trackData: Record<string, MusicTrackData>;
    _trackNodes: Record<string, MusicTrackNodes>;
    musicChannels: Record<string, GainNode>;
    play(trackId: string | number): void;
    stop(trackId: string | number): void;
    getTrackData(sfxId: string | number): MusicTrackData;
    registerMusicTracks(data: MusicTrackData[]): void;
    createMusicNodes(): Promise<void>;
};
