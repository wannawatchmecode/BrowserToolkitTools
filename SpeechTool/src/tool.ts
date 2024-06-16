import { Tool } from "browser-toolkit-interface";

export class SpeechTool implements Tool {
    readonly name: string = "SpeechTool";
    synth: SpeechSynthesis;
    voices: SpeechSynthesisVoice[];
    //pitch: number;
    // rate: number;
    constructor() {
        this.synth = window.speechSynthesis;
        this.voices = this.synth.getVoices();
    }

    speek(text: string) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.voices[0];
        this.synth.speak(utterance);
    }
}
