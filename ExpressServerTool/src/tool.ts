import { Tool } from "browser-toolkit-interface";
import { RepoTool } from "./repo-tool";
import express, { Application } from "express";

export interface ExpressServerToolProps {
    
}

export class ExpressServerTool implements Tool {
    readonly name: string = "ExpressServerTool";
    constructor(props: ExpressServerToolProps) {
        
    }

    /**
     * Retrieves available tools from repo.
     * TODO: define concrete response
     */
    getInstance() {
        return express();
    }
}
