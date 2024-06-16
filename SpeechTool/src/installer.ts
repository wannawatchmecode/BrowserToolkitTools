import { SpeechTool } from "./tool";

export class SpeechToolInstaller {
    // static install(toolkit: BrowserToolkit) { // TODO: pull out into common package
    static install(toolkit: any) {
        const speechTool = new SpeechTool();
        toolkit.addTool(speechTool);
    }
}
