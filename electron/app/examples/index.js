import { DAE } from "../code/DivineAudioEngine.js";
console.log(DAE.version);
DAE.music.registerMusicTracks([
    {
        path: "./assets/audio/title-screen.mp3",
        id: "1",
        loop: false,
    },
]);
DAE.$INIT();
