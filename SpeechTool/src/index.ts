import { SpeechToolInstaller } from "./installer";

console.log('Installing speech tool with SpeechToolInstaller');
SpeechToolInstaller.install((window as any).BrowserToolkit);
console.log('Installed SpeechTool with Soeech tool installer');
