import { IBrowserToolkit } from "browser-toolkit-interface";
import { BrowserToolkitToolTemplate, BrowserToolkitToolTemplateProps } from "./tool";

export class BrowserToolkitToolTemplateInstaller {
    static install(toolkit: IBrowserToolkit) {
        const props: BrowserToolkitToolTemplateProps = {};
        const tool = new BrowserToolkitToolTemplate(props);
        toolkit.addTool(tool);
    }
}
