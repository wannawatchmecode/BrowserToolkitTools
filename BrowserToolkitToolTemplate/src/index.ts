import { BrowserToolkitToolTemplateInstaller } from "./installer";

console.log('Installing BrowserToolkitToolTemplate with BrowserToolkitToolTemplateInstaller');
BrowserToolkitToolTemplateInstaller.install((window as any).BrowserToolkit);
console.log('Installed BrowserToolkitToolTemplate with BrowserToolkitToolTemplateInstaller');
