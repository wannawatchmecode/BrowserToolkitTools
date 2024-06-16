import { Tool } from "browser-toolkit-interface";

export interface ToolkitConfigurationManagerToolProps {

}

export interface Repository {
    url: string;
}

export interface ToolProps {
    toolName: string;
    repository: Repository; // TODO: make part of interface package
}

export class ToolkitConfigurationManagerTool implements Tool {
    readonly name: string = "ToolkitConfigurationManagerTool";
    constructor(props: ToolkitConfigurationManagerToolProps) {
        
    }

    // Cya next time!

    saveTool(toolProps: ToolProps) {
        localStorage.setItem(toolProps.toolName, JSON.stringify(toolProps.repository));
    }

    removeTool(toolName: string) {
        localStorage.removeItem(toolName);
    }
}
