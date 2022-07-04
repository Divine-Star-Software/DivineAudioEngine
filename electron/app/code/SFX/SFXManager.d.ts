import { SFXData, SFXNodes, SFXPlayOptions } from "../Meta/Audio.types";
export declare const SFXMAnager: {
    _sfxPlayIdCount: number;
    _playingSFX: Record<string, Record<string, AudioBufferSourceNode>>;
    _sfxCount: number;
    _sfxPalette: Record<string, number>;
    _sfxMap: Record<number, string>;
    _sfxData: Record<string, SFXData>;
    _sfxNodes: Record<string, SFXNodes>;
    _sfxChannels: Record<string, GainNode>;
    _getPanner(data: SFXData, options?: SFXPlayOptions | undefined): false | PannerNode;
    play(sfxId: string | number, options?: SFXPlayOptions | undefined): string;
    /**# Stop Specific
     * ---
     * Use the id returned from `play` to stop a specific instance of a sound.
     */
    stopSpecific(sfxId: string | number, id: string): false | undefined;
    stopAll(sfxId: string | number): false | undefined;
    getSFXData(sfxId: string | number): SFXData;
    getSFXNode(sfxId: string | number): SFXNodes;
    registerSFX(sfxData: SFXData[]): void;
    registerSFXChannel(): void;
    createChannels(): void;
    createSFXNodes(): Promise<void>;
};
