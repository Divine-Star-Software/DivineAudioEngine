export declare const SoundSpaceManager: {
    model: "HRTF" | "equalpower";
    setListenerPosition(x: number, y: number, z: number): void;
    /**# Set Listener Direction
     * ---
     * For 3d games set this to the forward vector of the player camera.
     */
    setListenerDirection(x: number, y: number, z: number): void;
};
