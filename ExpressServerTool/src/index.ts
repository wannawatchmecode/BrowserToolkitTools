import { ExpressServerToolInstaller } from "./installer";

console.log('Installing ExpressServerTool with ExpressServerToolInstaller');
ExpressServerToolInstaller.install((window as any).BrowserToolkit);
console.log('Installed ExpressServerTool with ExpressServerToolInstaller');
