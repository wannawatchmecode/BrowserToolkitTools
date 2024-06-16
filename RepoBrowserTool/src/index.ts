import { RepoBrowserToolInstaller } from "./installer";

console.log('Installing RepoBrowserTool with RepoBrowserToolInstaller');
RepoBrowserToolInstaller.install((window as any).BrowserToolkit);
console.log('Installed RepoBrowserTool with RepoBrowserToolInstaller');
