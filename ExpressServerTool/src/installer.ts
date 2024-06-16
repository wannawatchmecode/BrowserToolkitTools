import { IBrowserToolkit } from "browser-toolkit-interface";
import { ExpressServerTool } from "./tool";

export class ExpressServerToolInstaller {
    static install(toolkit: IBrowserToolkit) {
        const tool = new ExpressServerTool({});
        toolkit.addTool(tool);
    }
}
