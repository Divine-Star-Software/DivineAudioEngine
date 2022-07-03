import { SFXData } from "../Meta/Audio.types";
export declare const SFXMAnager: {
    _sfxCount: number;
    _sfxPalette: Record<string, number>;
    _sfxMap: Record<number, string>;
    _sfxData: Record<string, SFXData>;
    play(sfxId: string | number): void;
    stop(sfxId: string | number): void;
    getSFXData(sfxId: string | number): SFXData;
    registerSFX(sfxData: SFXData[]): void;
    createSFXNodes(): void;
};
