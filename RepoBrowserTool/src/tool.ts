import { Tool } from "browser-toolkit-interface";
import { RepoTool } from "./repo-tool";
import { Axios } from 'axios';

export interface RepoBrowserToolProps {
    axios: Axios;
}

export interface Repo {
    url: string;
}

export interface GetAvailableToolsProps {
    repo: Repo;
}

const AVAILABLE_TOOLS_PATH = '/available/tools';

export class RepoBrowserTool implements Tool {
    axios: Axios;
    
    readonly name: string = "BrowserToolkitToolTemplate";
    constructor(props: RepoBrowserToolProps) {
        this.axios = props.axios;
    }

    /**
     * Retrieves available tools from repo.
     * TODO: define concrete response
     */
    async getAvailableTools(getAvailableToolsProps: GetAvailableToolsProps): Promise<String[]> {
        const repoUrl = getAvailableToolsProps.repo.url;
        const availableToolsResponse = await this.axios.get(`${repoUrl}${AVAILABLE_TOOLS_PATH}`);
        if(availableToolsResponse.status != 200) {
            throw new Error(`Received invalid response when attempting to get available tools from repo ${repoUrl} with response code ${availableToolsResponse.status}`);
        }
        return availableToolsResponse.data;
    }
}
