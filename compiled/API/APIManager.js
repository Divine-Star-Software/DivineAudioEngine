const context = new AudioContext();
const masterChannel = context.createGain();
masterChannel.connect(context.destination);
export const APIManager = {
    context: context,
    audioDiv: document.createElement("div"),
    audioElements: {},
    audioElementSourceNodes: {},
    $INIT() {
        if (!APIManager.context) {
            throw new Error("AudioContext is not found. This browser is not suppourted.");
        }
        if (!APIManager.audioDiv) {
            throw new Error("AudioDiv is not found. This browser is not suppourted.");
        }
        document.body.append(APIManager.audioDiv);
    },
    async createReverb() {
        let convolver = this.context.createConvolver();
        // load impulse response from file
        let response = await fetch("DAE/reverb/St Nicolaes Church.wav");
        //let response = await fetch("./assets/audio/title-screen.mp3");
        let arraybuffer = await response.arrayBuffer();
        convolver.buffer = await this.context.decodeAudioData(arraybuffer);
        return convolver;
    },
    async createAudioElementNode(id, path) {
        const audio = new Audio(path);
        audio.id = id;
        this.audioElements[id] = audio;
        const audioNode = APIManager.context.createMediaElementSource(audio);
        const gainNode = APIManager.context.createGain();
        const gainNode2 = APIManager.context.createGain();
        const reverb = await this.createReverb();
        audioNode.connect(reverb);
        reverb.connect(gainNode);
        gainNode.connect(masterChannel);
        audioNode.connect(gainNode2);
        gainNode2.connect(masterChannel);
        gainNode.gain.value = 0.5;
        gainNode2.gain.value = 0.4;
        audioNode.mediaElement.play();
        this.audioElementSourceNodes[id] = audioNode;
    },
};
