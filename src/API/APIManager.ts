import { MusicTrackNodes, PannerNodeData, SFXNodes } from "../Meta/Audio.types";

const context = new AudioContext();
const masterChannel = context.createGain();
masterChannel.connect(context.destination);

export const APIManager = {
  context: context,

  master: masterChannel,

  pannerNodeDefaults: <Partial<PannerNodeData>>{
    panningModel: "HRTF",
    distanceModel: "exponential",
  },

  $INIT() {
    if (!APIManager.context) {
      throw new Error(
        "AudioContext is not found. This browser is not suppourted."
      );
    }
  },

  connectToMaster(node: AudioNode) {
    node.connect(this.master);
  },

  createAudioBufferSource(buffer: AudioBuffer) {
    const source = context.createBufferSource();
    source.buffer = buffer;
    return source;
  },

  createGain() {
    const gain = this.context.createGain();
    return gain;
  },

  createConvolver(buffer: AudioBuffer) {
    const convolver = this.context.createConvolver();
    convolver.buffer = buffer;
    return convolver;
  },

  createPannerNode(nodeData: Partial<PannerNodeData>) {
    const context = this.context;
    if (!nodeData.distanceModel) {
      nodeData.distanceModel = this.pannerNodeDefaults.distanceModel;
    }
    if (!nodeData.panningModel) {
      nodeData.panningModel = this.pannerNodeDefaults.panningModel;
    }
    return new PannerNode(context, nodeData);
  },

  async getAudioBuffer(path: string): Promise<AudioBuffer> {
    const response = await fetch(path);
    const buffer = await response.arrayBuffer();
    const source = await APIManager.context.decodeAudioData(buffer);
    return source;
  },

  async createAudioElementNode(path: string): Promise<MusicTrackNodes> {
    const audio = new Audio(path);
    const audioNode = APIManager.context.createMediaElementSource(audio);
    const masterGainNode = APIManager.context.createGain();
    masterGainNode.connect(masterChannel);
    audioNode.connect(masterGainNode);
    return {
      master: masterGainNode,
      audio: audioNode,
      effects: {},
    };
  },
};
